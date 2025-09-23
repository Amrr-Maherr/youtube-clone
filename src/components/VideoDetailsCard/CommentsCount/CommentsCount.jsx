function commentsCount({ video }) {
  return (
    <div className="mt-3">
      <h1 className="text-[20px] font-[700] text-[#f1f1f1]">
        Comment {video.statistics.commentCount}
      </h1>
    </div>
  );
}

export default commentsCount
