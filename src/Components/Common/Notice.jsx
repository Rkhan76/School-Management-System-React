import {useState, useEffect} from "react";
import { handleNoticeGet } from "../../fetching/fetch";

function Notice(){
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
      }, []);

      return (
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
                  <h2 className="text-xl font-semibold mb-2">{notice.title}</h2>
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
      );
}


export default Notice