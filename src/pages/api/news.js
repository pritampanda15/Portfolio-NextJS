export default function handler(req, res) {
    const news = [
      {
        title: "The ABCs of AlphaFold 3, Boltz, and Chai-1",
        excerpt: "Discover the latest advancements in AI-driven protein design.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7268935224925794304/",
      },
      {
        title: "New Insights into Multiomics",
        excerpt: "How multiomics is reshaping biological research.",
        link: "https://example.com/blog/multiomics",
      },
    ];
  
    res.status(200).json(news);
  }
  