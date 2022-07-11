import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/actions";
import Todo from "../Todo";

export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [prioriry, setPriority] = useState("Medium");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTodoName(value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const handleAddButtonClick = () => {
    // dispatch an Action
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: prioriry,
      })
    );
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" />
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={prioriry}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
