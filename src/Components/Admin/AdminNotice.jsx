import React, { useState, useEffect } from "react";
import { handleNoticePost, handleNoticeGet, handleNoticeDelete } from "../../fetching/fetch"; // Assuming getNotice is your fetch function

function AdminNotice() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authority, setAuthority] = useState("");
  const [publishedNotice, setPublishedNotice] = useState(null);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await handleNoticeGet();
        setNotices(response);
        console.log("response of array :", response);
      } catch (error) {
        console.error("Failed to fetch notices:", error);
      }
    };

    fetchNotices();
  }, [publishedNotice]);

  const handleDelete = async (noticeId) => {
    console.log('here is the id', noticeId)
    try {
      const response = await handleNoticeDelete(noticeId);
      console.log(response);
      // Filter out the deleted notice from the notices state
      const updatedNotices = notices.filter(notice => notice._id !== noticeId);
      // Update the notices state with the filtered array
      setNotices(updatedNotices);
      alert("Notice deleted successfully!");
    } catch (error) {
      console.error("Failed to delete notice:", error);
      alert("Error deleting notice");
    }
  };

  const handlePublish = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior

    const today = new Date().toISOString().slice(0, 10); // Gets today's date in YYYY-MM-DD format

    const noticeData = {
      title,
      dateOfIssue: today, // Assign today's date on submission
      content,
      authority,
    };

    try {
      const response = await handleNoticePost(noticeData);
      console.log(response);
      setPublishedNotice(noticeData); // Update the UI with the notice details
      alert("Notice published successfully!");
      // Clear form fields
      setTitle("");
      setContent("");
      setAuthority("");
    } catch (error) {
      console.error("Failed to publish notice:", error);
      alert("Error publishing notice");
    }
  };

  return (
    <div>
      <div className="w-full p-20">
        <h1 className="text-3xl font-bold mb-6">Admin Notice Board</h1>

        <form onSubmit={handlePublish} className="grid grid-cols-1 gap-6">
          <input
            type="text"
            className="p-2 border-gray-300 border rounded shadow-sm"
            placeholder="Title of the Notice"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full p-2 border-gray-300 border rounded shadow-sm"
            placeholder="Content of the Notice"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
          />

          <select
            className="p-2 border-gray-300 border rounded shadow-sm"
            required
            value={authority}
            onChange={(e) => setAuthority(e.target.value)}
          >
            <option value="">Select Authority</option>
            <option value="Principal">Principal</option>
            <option value="Vice Principal">Vice Principal</option>
            <option value="Manager">Manager</option>
          </select>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Publish Notice
          </button>
        </form>
      </div>
      <div className="w-full  p-20">
        <h1 className="text-3xl font-bold mb-6">Published Notices</h1>
        {notices
          .slice(0)
          .reverse()
          .map((notice, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded bg-gray-50 p-6 mb-4"
            >
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold mb-2">{notice.title}</h2>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(notice._id)}>delete</button>
              </div>
              <p className="text-sm text-gray-600">
                Date of Issue: {notice.date.substring(0, 10)}
              </p>
              <p className="mt-4">{notice.details}</p>
              <p className="text-sm text-gray-600 mt-4">
                Issued by: {notice.post}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AdminNotice;
