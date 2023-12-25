export default function Home() {

  const copyContent1 = () => {
    navigator.clipboard.writeText('curl --version');
  };
  
  
  return (
    <div className="bg-gray-200 min-h-screen overflow-hidden">
      <div className="p-8 my-8 max-w-[900px] w-[95%] mx-auto bg-white rounded-xl shadow-lg">
        <div className="text-3xl mb-6 font-medium text-black">
          Welcome to Erik Roche's API Resume!
        </div>
        <div className="text-lg">
          Learn how to access my Resume via REST API call
        </div>
      </div>
      <div className="p-8 my-8 max-w-[900px] w-[95%] mx-auto bg-white rounded-xl shadow-lg">
        <div className="text-3xl mb-6 font-medium text-black">
        Using cURL
        </div>
        <div className="text-lg mb-6">
          <a className="text-blue" href="https://github.com/curl/curl">cURL</a> serves as a straightforward command line tool facilitating requests to a remote server. This is the fastest way to view my API resume.
        </div>
        <div className="text-lg p-2">
          1. Ensure that cURL is installed on your machine. In your favorite command line interface, execute:
        </div>
        <div className="mb-6 text-md text-white p-2 w-full bg-gray-700 rounded-md">
          <code className="p-2 flex-grow-0">curl --version</code>
        </div>
        <div className="mb-6 text-lg p-2">
          You should observe information displayed regarding the installed version of cURL on your machine. In the event you receive a message stating that cURL is not installed, you have the option to download and install cURL or explore alternative methods to access my API resume.
        </div>

        <div className="text-lg p-2">
          2. Once you have verified that cURL is installed, execute the following code in the command line:
        </div>

        <div className="mb-6 text-md text-white p-2 w-full bg-gray-700 rounded-md">
          <code className="p-2 flex-grow-0">curl -k https://erikroche.com/api/resume</code>
        </div>

        <div className="text-lg p-2">
          The response should be a JSON object containing my full resume.
        </div>
      </div>
    </div>
  )
}
