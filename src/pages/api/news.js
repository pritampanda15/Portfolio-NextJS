export default function handler(req, res) {
  const news = [
      {
          title: "Excited to Join Stanford as a Postdoc!",
          excerpt: "Thrilled to announce that I'll be joining Stanford University as a Postdoctoral Scholar in the Department of Anesthesiology, Perioperative, and Pain Medicine at Stanford University School of Medicine. My current research is centered on designing novel anesthetics suitable for battlefield conditions. Leveraging AI-driven protein design and high-throughput virtual screening, he aims to accelerate the drug discovery process and develop effective anesthetic agents.",
          time: "Stanford University", // Add your preferred date and time format
          link: "https://profiles.stanford.edu/pritam-panda", // Update with your profile or announcement link
      },
      {
          title: "The ABCs of AlphaFold 3, Boltz, and Chai-1",
          excerpt: "I recently came across The ABCs of AlphaFold 3, Boltz, and Chai-1, a fascinating report exploring the advancements in AI-based protein structure prediction and modeling by Brian Naughton. How do you envision integrating these technologies into your workflows?",
          time: "Boolean Biotech",// Add your preferred date and time format
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7268935224925794304/",
      },
      {
        title: "Celebrating 5K Subscribers on My YouTube Channel!",
        excerpt: "A heartfelt thank you to everyone for your support and encouragement as we hit the 5K subscriber milestone. Stay tuned for more exciting content!",
        time: "YouTube", // Replace with your preferred date and time
        link: "https://www.youtube.com/@BioinfoCopilot", // Replace with the link to your YouTube channel
    },


  ];

  res.status(200).json(news);
}
