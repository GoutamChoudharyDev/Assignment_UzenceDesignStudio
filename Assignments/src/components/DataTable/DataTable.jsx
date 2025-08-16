import React, { useState } from "react";

// ......DataTable Component......
const DataTable = ({
  data = [],
  columns = [],
  loading = false,
  selectable = false,
  onRowSelect,
}) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  // Sorting Logic
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortConfig]);

  // Handle Sorting
  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev?.key === key && prev.direction === "asc") {
        return { key, direction: "desc" };
      }
      return { key, direction: "asc" };
    });
  };

  // Handle Row Selection
  const handleRowSelect = (row) => {
    let updated;
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter((r) => r !== row);
    } else {
      updated = selectable === "single" ? [row] : [...selectedRows, row];
    }
    setSelectedRows(updated);
    if (onRowSelect) onRowSelect(updated);
  };

  // Loading State
  if (loading) {
    return (
      <div className="p-4 text-center text-gray-500">Loading data...</div>
    );
  }

  // Empty State
  if (data.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">No data available</div>
    );
  }

  return (
    <table className="min-w-full border border-gray-300 rounded-md">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="p-2 border">Select</th>}
          {columns.map((col) => (
            <th
              key={col.key}
              className="p-2 border cursor-pointer text-left"
              onClick={() => handleSort(col.key)}
            >
              {col.label}
              {sortConfig?.key === col.key &&
                (sortConfig.direction === "asc" ? " 🔼" : " 🔽")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`hover:bg-gray-100 ${
              selectedRows.includes(row) ? "bg-blue-100" : ""
            }`}
          >
            {selectable && (
              <td className="p-2 border text-center">
                <input
                  type={selectable === "single" ? "radio" : "checkbox"}
                  checked={selectedRows.includes(row)}
                  onChange={() => handleRowSelect(row)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className="p-2 border">
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
