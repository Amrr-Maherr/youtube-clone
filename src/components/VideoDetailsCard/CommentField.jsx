import { Input } from "@/components/ui/input";
function CommentField() {
  return (
    <>
      <div className="mt-6">
        <Input
          type="text"
          placeholder="Add a comment..."
          className="border border-b border-[#3f3f3f] border-r-0 border-l-0 border-t-0 rounded-none 
             focus:!outline-none focus:!ring-0"
        />
      </div>
    </>
  );
}

export default CommentField;
