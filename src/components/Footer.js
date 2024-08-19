export default function Footer() {
  return (
    <>
      <footer>
        <ul className="text-center flex flex-col">
          <br />
          <li className="text-gray-800 inline-block text-lg mx-2 my-1">
            Website:{" "}
            <a href="https://www.linkedin.com/in/saurav-chaudhari-1ab838265/" className="text-blue-500">
              saurav.me
            </a>
          </li>
          <br />
          <li className="inline-block mx-2 mt-2 mb-12 text-blue-500 font-bold text-base">
            Made by{" "}
            <a
              href="https://github.com/srcvision"
              className="text-gray-800"
            >
              srcvision(Saurav Chaudahri)
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
