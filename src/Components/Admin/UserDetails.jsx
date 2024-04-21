import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { handleGetUserDetail, handleGetUserProfile, handleDeleteUserProfile } from "../../fetching/fetch";
import viewIcon from "../../assets/viewIcon.png";
import deleteIcon from "../../assets/deleteIcon.png";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await handleGetUserDetail();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { field: "role", headerName: "Role", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "createdAt", headerName: "Created At", width: 200 },
    {
      field: "viewProfile",
      headerName: "View Profile",
      width: 150,
      renderCell: (params) => (
        <img
          src={viewIcon}
          onClick={() => handleViewProfile(params.row)}
          alt="View Icon"
          style={{ cursor: "pointer", width: "24px", height: "24px" }} // Adjust icon size here
        />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <img
          src={deleteIcon}
          onClick={() => handleDeleteProfile(params.row)}
          alt="Delete Icon"
          style={{ cursor: "pointer", width: "24px", height: "24px" }} // Adjust icon size here
        />
      ),
    },
  ];

  const handleViewProfile = async (row) => {
    try {
      const userProfileData = await handleGetUserProfile(row.email, row.role);
      setUserProfile(userProfileData);
      setOpen(true);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleDeleteProfile = async (row) => {
    try {
      await handleDeleteUserProfile(row.email, row.role);
      // Remove the deleted user from the users list
      const updatedUsers = users.filter(user => user.email !== row.email);
      setUsers(updatedUsers);
      alert('User deleted successfully!');
    } catch (error) {
      console.error("Error deleting user profile:", error);
      alert('Failed to delete user!');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <div className="m-10 bg-gray-400 rounded-md">
            <h1 className="p-5 text-3xl">User Details</h1>
          </div>
          <Box className="m-10 rounded-md" sx={{ height: 400 }}>
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableRowSelectionOnClick
              getRowId={(row) => row._id}
            />
          </Box>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            User Profile
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {userProfile && Object.keys(userProfile).map((key) => (
              <div key={key}>
                <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: </strong>
                {userProfile[key]}
                <br />
              </div>
            ))}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default UserDetails;
