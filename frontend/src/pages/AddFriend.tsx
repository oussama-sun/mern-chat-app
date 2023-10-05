import React from "react";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

const AddFriend = () => {
  return (
    <div>

      <div className="flex justify-center items-center w-full space-x-4 absolute inset-0">
        <Input
          className="input-primary"
          placeholder="add a friend by email"
          type="text"
        />
        <Button
          className="btn btn-outline [&>span]:text-primary"
          withChildren={true}
          onClick={async () => 0}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddFriend;
