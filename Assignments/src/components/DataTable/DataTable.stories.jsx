import DataTable from "./DataTable";

export default {
    title: "Components/DataTable",
    component: DataTable,
};

// Sample data
const sampleData = [
    { id: 1, name: "Alice", age: 25, role: "Developer" },
    { id: 2, name: "Bob", age: 30, role: "Designer" },
    { id: 3, name: "Charlie", age: 28, role: "Manager" },
];

// Columns config
const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "role", label: "Role" },
];

// Default Table
export const Default = {
    args: {
        data: sampleData,
        columns,
    },
};

// Loading State
export const Loading = {
    args: {
        data: [],
        columns,
        loading: true,
    },
};

// Empty State
export const Empty = {
    args: {
        data: [],
        columns,
    },
};

// Single Selection
export const SingleSelection = {
    args: {
        data: sampleData,
        columns,
        selectable: "single",
    },
};

// Multiple Selection
export const MultiSelection = {
    args: {
        data: sampleData,
        columns,
        selectable: "multiple",
    },
};
