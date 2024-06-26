import { useResearchPapers } from "../../hooks/useResearchPapers";

const ResearchPapers = () => {
  const [researchPapers] = useResearchPapers();
  return (
    <div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center my-8">
        Student Research Papers
      </h1>

      <div className="overflow-x-auto my-5">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-red-50">
            <tr className="font-bold text-sm text-gray-800">
              <th>Title</th>
              <th>Author</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {researchPapers.map((paper) => (
              <tr key={paper?._id}>
                <td>{paper?.title}</td>
                <td>{paper?.author}</td>
                <td><a href={paper?.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Link</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResearchPapers;
