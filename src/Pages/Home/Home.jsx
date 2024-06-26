import Banner from "./Banner";
import Gallery from "./Gallery";
import ResearchPapers from "./ResearchPapers";
import TopColleges from "./TopColleges";
import ReviewSection from "./ReviewSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopColleges></TopColleges>
            <Gallery />
            <ResearchPapers />
            <ReviewSection />
        </div>
    );
};

export default Home;