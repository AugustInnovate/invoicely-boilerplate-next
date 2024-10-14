import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AtlasUISecond() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">PDF Processing</h1>
        <div className="mb-4">
          <label htmlFor="po-number" className="block text-sm font-medium mb-2">
            PO Number
          </label>
          <Input id="po-number" placeholder="Enter PO Number" className="w-full bg-gray-800 border-2 border-gray-600" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Choose a PDF file</label>
          <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border-4 border-dotted border-gray-400">
            <div className="flex items-center gap-2">
              <CloudUploadIcon className="w-6 h-6 text-gray-300" />
              <span className="text-gray-300">Drag and drop file here</span>
            </div>
            <Button variant="outline" className="border-red-500 text-red-500">
              Browse files
            </Button>
          </div>
          <div className="mt-2 flex items-center gap-2 text-gray-400">
            <FileIcon className="w-4 h-4" />
            <span>WA Ecommerce Waaree Energies SOW-Changes-14-02-24-Ecommerce Flow-1.pdf</span>
            <span className="text-sm">227.9KB</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg border-4 border-gray-400">
            <h2 className="text-xl font-semibold mb-4">Extracted Text</h2>
            <div className="bg-gray-700 p-4 rounded-lg h-96 overflow-auto">
              <p>Menu</p>
              <ul className="list-disc list-inside">
                <li>About us</li>
                <li>Work and achievements</li>
                <li>Shop Now</li>
                <li>Solar calculator GDN+DSP+META Push login</li>
                <li>Download</li>
                <li>Bulk enquiries</li>
                <li>Menu</li>
                <li>Order return policy / Optional replacement policy</li>
                <li>Order delivery time</li>
                <li>Warranty policy</li>
                <li>Installation request</li>
                <li>Rate us</li>
                <li>Become affiliates</li>
                <li>Who will validate</li>
                <li>Frequency</li>
                <li>1</li>
                <li>Push to in call CRM</li>
                <li>Call centre</li>
                <li>Can we redirect call immediately</li>
                <li>And get a token gift from us</li>
                <li>And help us to reach our goal towards clean energy</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border-4 border-gray-400">
            <h2 className="text-xl font-semibold mb-4">PDF Viewer</h2>
            <div className="bg-gray-700 p-4 rounded-lg h-96 flex items-center justify-center">
              <div className="bg-white w-full h-full flex items-center justify-center">
                <FileIcon className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <Button variant="outline" className="text-gray-300">
                Previous
              </Button>
              <span className="text-gray-300">1 / 1</span>
              <Button variant="outline" className="text-gray-300">
                Next
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="query" className="block text-sm font-medium mb-2">
            Query
          </label>
          <Input id="query" placeholder="Enter your query here" className="w-full bg-gray-800 border-2 border-gray-600" />
          <Button className="mt-4 w-full bg-blue-600">Process Query</Button>
        </div>
      </div>
    </div>
  );
}

function CloudUploadIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  );
}

function FileIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
