import React from 'react'

function Notice() {
    const notices = [
      {
        title: 'Important Announcement',
        noticeData:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna ac libero commodo vehicula.',
        author: 'Admin',
        timestamp: '2024-01-29T12:30:00Z',
      },
      {
        title: 'Reminder: Upcoming Event',
        noticeData:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        author: 'Event Coordinator',
        timestamp: '2024-02-15T18:00:00Z',
      },
      {
        title: 'Change in Schedule',
        noticeData:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut ex eu arcu fermentum dignissim.',
        author: 'Head of Department',
        timestamp: '2024-03-10T09:45:00Z',
      },
    ]


    const noticeToShow = notices.map((notice, index) => (
      <div className='m-10 bg-rose-400 p-10 rounded-md' key={index}>
        <div>{notice.timestamp}</div>
        <h5>{notice.title}</h5>
        <p>{notice.noticeData}</p>
        <p>{notice.author} / </p>
      </div>
    ))


  return (
    <div>
      <h1>Notice Board</h1>
      <div className='flex'>
        <input type="date" />
        <input type="text" />
        <button>Search</button>
      </div>
      {noticeToShow}
    </div>
  )
}

export default Notice
