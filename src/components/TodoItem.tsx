import { Checkbox, Typography, Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";
export const TodoItem = ({ title, id, completed, onToggle, onDelete }) => {
  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
      <Checkbox
        checked={completed}
        onChange={() =>
          onToggle({
            variables: {
              id,
              completed: !completed,
            },
          })
        }
      />
      <Typography>{title}</Typography>
      <Button
        size="small"
        type="primary"
        icon={<DeleteFilled />}
        onClick={() =>
          onDelete({
            variables: { id },
          })
        }
      />
    </div>
  );
};
