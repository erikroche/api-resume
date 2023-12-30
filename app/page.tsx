import { CopyButton } from "@/components/copybutton"

export default function Home() {  
  return (
    <div className="bg-gray-200 min-h-screen overflow-hidden">
      <div className="p-8 my-8 max-w-[900px] w-[95%] mx-auto bg-white rounded-xl shadow-lg">
        <div className="text-3xl mb-6 font-medium text-black">
          Welcome to Erik Roche&apos;s API Resume!
        </div>
        <div className="text-lg">
          Learn how to access my Resume via a REST API call
        </div>
      </div>

      <div>
        <div className="p-8 my-8 max-w-[900px] w-[95%] mx-auto bg-white rounded-xl shadow-lg">
          <div className="text-3xl mb-6 font-medium text-black">
            Using a Web Browser
          </div>
          <div className="text-lg mb-6">
            You can access my API resume in a web browser by navigating to the following URL:
          </div>
          <div className="mb-6 text-md flex justify-between text-white p-2 w-full bg-gray-700 rounded-md">
            <code className="p-2 flex-grow-0">https://erik-roche-api-resume.vercel.app/api/resume</code>
            <CopyButton text="https://erik-roche-api-resume.vercel.app/api/resume">
              Copy
            </CopyButton>
          </div>
          <div className="text-lg mb-6">
            The response should be a JSON object containing my full resume. You can explore the JSON object in your browser or copy the response and paste it into a JSON viewer such as <a className="text-blue-700 hover:text-blue-900 underline" href="https://jsonformatter.curiousconcept.com/" target="_blank" rel="noopener noreferrer">JSON Formatter</a>.
          </div>
        </div>
      </div>

      <div className="p-8 my-8 max-w-[900px] w-[95%] mx-auto bg-white rounded-xl shadow-lg">
        <div className="text-3xl mb-6 font-medium text-black">
        Using cURL
        </div>
        <div className="text-lg mb-6">
          <a className="text-blue-700 hover:text-blue-900 underline" href="https://github.com/curl/curl" target="_blank" rel="noopener noreferrer">cURL</a> serves as a straightforward command line tool facilitating requests to a remote server. cURL is available on most operating systems and can be used to access my API resume.
        </div>
        <div className="text-lg p-2">
          1. Ensure that cURL is installed on your machine. In your favorite command line interface, execute:
        </div>
        <div className="mb-6 text-md text-white p-2 w-full bg-gray-700 rounded-md flex justify-between">
          <code className="p-2 flex-grow-0">curl --version</code>
          <CopyButton text="curl --version">
            Copy
          </CopyButton>
        </div>
        <div className="mb-6 text-lg p-2">
          You should observe information displayed regarding the installed version of cURL on your machine. In the event you receive a message stating that cURL is not installed, you have the option to download and install cURL or explore alternative methods to access my API resume.
        </div>
        <div className="text-lg p-2">
          2. Once you have verified that cURL is installed, execute the following code in the command line:
        </div>
        <div className="mb-6 text-md flex justify-between text-white p-2 w-full bg-gray-700 rounded-md">
          <code className="p-2 flex-grow-0">curl -k https://erik-roche-api-resume.vercel.app/api/resume</code>
          <CopyButton text="curl -k https://erik-roche-api-resume.vercel.app/api/resume">
            Copy
          </CopyButton>
        </div>
        <div className="text-lg p-2">
          The response should be a JSON object containing my full resume. You can explore the JSON object in your command line or copy the response and paste it into a JSON viewer such as <a className="text-blue-700 hover:text-blue-900 underline" href="https://jsonformatter.curiousconcept.com/" target="_blank" rel="noopener noreferrer">JSON Formatter</a>.
        </div>
      </div>

      <div className="p-8 my-8 max-w-[900px] w-[95%] mx-auto bg-white rounded-xl shadow-lg">
        <div className="text-3xl mb-6 font-medium text-black">
          Using an API Client
        </div>
        <div className="text-lg mb-6">
        API clients like <a className="text-blue-700 hover:text-blue-900 underline" href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">Postman</a> and <a className="text-blue-700 hover:text-blue-900 underline" href="https://insomnia.rest/" target="_blank" rel="noopener noreferrer">Insomnia</a> allow for interacting with APIs using a visual user interface that make it easy to test API endpoints.
        </div>
        <div className="text-lg p-2">
          1. Download and install your preferred API client.
        </div>
        <div className="text-lg p-2">
          2. Open up your API client and create a new workspace. Navigate to make a http request.
        </div>
        <div className="text-lg p-2">
          3. Select GET and enter the following in the body:
        </div>
        <div className="mb-6 text-md flex justify-between text-white p-2 w-full bg-gray-700 rounded-md">
          <code className="p-2 flex-grow-0">https://erik-roche-api-resume.vercel.app/api/resume</code>
          <CopyButton text="https://erik-roche-api-resume.vercel.app/api/resume">
            Copy
          </CopyButton>
        </div>
      </div>

      <div className="p-8 my-8 max-w-[900px] w-[95%] mx-auto bg-white rounded-xl shadow-lg">
        <div className="text-3xl mb-6 font-medium text-black">
          API Endpoints
        </div>
        <div className="text-lg mb-6">
          Once you are setup with one of the methods above, you can start accessing my resume with various endpoints. These are different URLs which you can make <b>GET</b> requests from to view different parts of my resume.
        </div>
        <div className="text-lg mb-6">
          The following endpoints are available:
        </div>
        <div className="text-lg p-2">
          1. <b>Index:</b> Shows all available endpoints.
        </div>
        <div className="mb-6 text-md flex justify-between text-white p-2 w-full bg-gray-700 rounded-md">
          <code className="p-2 flex-grow-0">https://erik-roche-api-resume.vercel.app/api/</code>
          <CopyButton text="https://erik-roche-api-resume.vercel.app/api/">
            Copy
          </CopyButton>
        </div>
        <div className="text-lg p-2">
          2. <b>Resume:</b> View my full resume.
        </div>
        <div className="mb-6 text-md flex justify-between text-white p-2 w-full bg-gray-700 rounded-md">
          <code className="p-2 flex-grow-0">https://erik-roche-api-resume.vercel.app/api/resume</code>
          <CopyButton text="https://erik-roche-api-resume.vercel.app/api/resume">
            Copy
          </CopyButton>
        </div>
        <div className="text-lg p-2">
          3. <b>Projects:</b> View information about the projects I&apos;ve built.
        </div>
        <div className="mb-6 text-md flex justify-between text-white p-2 w-full bg-gray-700 rounded-md">
          <code className="p-2 flex-grow-0">https://erik-roche-api-resume.vercel.app/api/projects</code>
          <CopyButton text="https://erik-roche-api-resume.vercel.app/api/projects">
            Copy
          </CopyButton>
        </div>
        <div className="text-lg p-2">
          4. <b>Experience:</b> View my work experience.
        </div>
        <div className="mb-6 text-md flex justify-between text-white p-2 w-full bg-gray-700 rounded-md">
          <code className="p-2 flex-grow-0">https://erik-roche-api-resume.vercel.app/api/experience</code>
          <CopyButton text="https://erik-roche-api-resume.vercel.app/api/experience">
            Copy
          </CopyButton>
        </div>
        <div className="text-lg p-2">
          5. <b>Contact</b> View my preferred contact information.
        </div>
        <div className="mb-6 text-md flex justify-between text-white p-2 w-full bg-gray-700 rounded-md">
          <code className="p-2 flex-grow-0">https://erik-roche-api-resume.vercel.app/api/contact</code>
          <CopyButton text="https://erik-roche-api-resume.vercel.app/api/contact">
            Copy
          </CopyButton>
        </div>
      </div>

      <div className="p-8 my-8 max-w-[900px] w-[95%] mx-auto bg-white rounded-xl shadow-lg">
        <div className="text-3xl mb-6 font-medium text-black">
          Contact
        </div>
        <div className="text-lg mb-6">
          If you have any questions or concerns, please feel free to reach out to me at <a className="text-blue-700 hover:text-blue-900 underline" href="mailto:info@erikroche.com">info@erikroche.com</a>. You can also find me on <a className="text-blue-700 hover:text-blue-900 underline" href="https://www.linkedin.com/in/erik-roche/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a className="text-blue-700 hover:text-blue-900 underline" href="https://github.com/erikroche" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </div>
      </div>
    </div>
  )
}
