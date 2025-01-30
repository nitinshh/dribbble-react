const cards = [
  {
    img: "https://th.bing.com/th/id/OIP.sP-OXHCbwpGSnnDpKMsn3AHaFj?w=202&h=152&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Mobile",
  },
  {
    img: "https://th.bing.com/th/id/OIP.MOXevhxUKyURN3bjN6TosQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Illustrations",
  },
  {
    img: "https://th.bing.com/th/id/OIP.AYBlcc4VDxsdguuPiX2i8wHaI4?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    name: "Animation",
  },
  // { img: "https://th.bing.com/th/id/OIP.QaGjMMY9jCGN3OVcVuY3wwHaJ4?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", name: "Print" },
  // { img: "https://th.bing.com/th/id/OIP.cio1IRy-DTnB3BP35z58DwHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7", name: "Web Design" },
  // { img: "https://th.bing.com/th/id/OIP.SLzsmkWtQmfkL80SprZHPwHaMf?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", name: "Branding" },
  // { img: "https://th.bing.com/th/id/OIP.Jn2ILThvDXTrhTbQd9FilQHaE7?w=290&h=193&c=7&r=0&o=5&dpr=1.5&pid=1.7", name: "Product Design" },
  // { img: "https://ts2.mm.bing.net/th?id=OIP.a4HiiY58aEBJD8d2AciZGgHaEY&pid=15.1", name: "Typography" }
];

const MarqueeSlider = () => {
  return (
    <div className="marquee">
      <div className="marquee_inner">
        {/* Duplicate cards for seamless infinite scrolling */}
        {[...cards, ...cards].map((card, index) => (
          <div key={index} className="marquee_card">
            <img src={card.img} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
