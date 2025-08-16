import DataTable from './components/DataTable/DataTable'
import InputField from './components/InputField/InputField'

const App = () => {
  // Sample data
  const sampleData = [
    { id: 1, name: "Neha", age: 25, role: "Developer" },
    { id: 2, name: "Rahul", age: 30, role: "Designer" },
    { id: 3, name: "Krishna", age: 28, role: "Manager" },
  ];

  // Column definitions
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "role", label: "Role" },
  ];
  return (
    <div className='p-10'>
      {/* ...Input Field... */}
      <InputField
        label="Name"
        placeholder="Enter your name"
        helperText="Helper text"
        clearable
      />

      {/* ...Default table... */}
      <DataTable data={sampleData} columns={columns} />

      <h2 className="text-lg font-semibold mt-6 mb-2">Single Selection</h2>
      <DataTable data={sampleData} columns={columns} selectable="single" />

      <h2 className="text-lg font-semibold mt-6 mb-2">Multiple Selection</h2>
      <DataTable data={sampleData} columns={columns} selectable="multiple" />

      <h2 className="text-lg font-semibold mt-6 mb-2">Loading State</h2>
      <DataTable data={[]} columns={columns} loading />

      <h2 className="text-lg font-semibold mt-6 mb-2">Empty State</h2>
      <DataTable data={[]} columns={columns} />
    </div>
  )
}

export default App
