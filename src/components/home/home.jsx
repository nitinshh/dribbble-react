import { useState } from "react";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";

const cardsData = [
  {
    id: 1,
    image:
      "https://th.bing.com/th/id/OIP.xn_2NVOd9gK4c-5bwyiSrgHaHa?rs=1&pid=ImgDetMain",
    creator: "Nancy",
    likes: 20,
    bookmarks: 5,
    userImage:
      "https://th.bing.com/th/id/OIP.gUbYpAArMqKXmoJgnWyYHgHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Collage",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/originals/10/96/48/109648acbb12c489c65472475c679aa5.jpg",
    creator: "Shanaya",
    likes: 35,
    bookmarks: 8,
    userImage:
      "https://th.bing.com/th/id/OIP.b86ArliHa9t3ezglwBtKxAHaHO?rs=1&pid=ImgDetMain",
    title: "Sky",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/ae/6c/b4/ae6cb422b687319bbdbbfec1f6ca8df2.jpg",
    creator: "Noni",
    likes: 15,
    bookmarks: 3,
    userImage:
      "https://i.pinimg.com/originals/3c/7e/3f/3c7e3f7d710f1ff9871e2579e11f8ffa.jpg",
    title: "Ice Cream",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/originals/be/14/88/be148863c1b38268192e240be7dd3428.jpg",
    creator: "Luke",
    likes: 25,
    bookmarks: 6,
    userImage:
      "https://th.bing.com/th/id/OIP.xJrCryY5WIzlb09HDiQFlAAAAA?rs=1&pid=ImgDetMain",
    title: "Party",
  },
  {
    id: 5,
    image:
      "https://wallpapers.com/images/hd/red-cute-aesthetic-pmth61t7vctcownl.jpg",
    creator: "Lily",
    likes: 40,
    bookmarks: 10,
    userImage:
      "https://i.pinimg.com/originals/71/c4/12/71c412aee07cb75c675b71419ecf82d2.jpg",
    title: "Red",
  },
  {
    id: 6,
    image:
      "https://th.bing.com/th/id/OIP.ly7zmHQSdrnEE0ygSqHumAHaHa?rs=1&pid=ImgDetMain",
    creator: "Tom",
    likes: 30,
    bookmarks: 7,
    userImage:
      "https://i.pinimg.com/originals/89/30/c6/8930c609a3b779111c19d54364d8d626.jpg",
    title: "Music",
  },

  {
    id: 7,
    image:
      "https://i.pinimg.com/originals/d8/30/11/d83011ad11360627e64cb531f0005e52.jpg",
    creator: "Finn",
    likes: 15,
    bookmarks: 16,
    userImage:
      "https://i.pinimg.com/originals/05/62/0f/05620f4dddc901920be1d6b8895ec2e9.jpg",
    title: "Bouquet",
  },
  {
    id: 8,
    image:
      "https://i.pinimg.com/originals/f7/14/4c/f7144cbce349b5e4257c4427c91d908f.jpg",
    creator: "Jenny",
    likes: 49,
    bookmarks: 40,
    userImage:
      "https://i.pinimg.com/originals/b5/c9/1d/b5c91d8a3e58538881e997342b87b228.jpg",
    title: "Rain",
  },
  {
    id: 9,
    image:
      "https://th.bing.com/th/id/OIP.YcSICJazjh8lkKc-WqcfkAHaEK?rs=1&pid=ImgDetMain",
    creator: "Alex",
    likes: 38,
    bookmarks: 37,
    userImage:
      "https://th.bing.com/th/id/OIP.PO6DY2_pU6bY1TlbnQdtQQHaHa?rs=1&pid=ImgDetMain",
    title: "Skyline",
  },
];

function Home() {
  const [cards, setCards] = useState(cardsData);

  const toggleLike = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id
          ? {
              ...card,
              isLiked: !card.isLiked,
              likes: card.isLiked ? card.likes - 1 : card.likes + 1,
            }
          : card
      )
    );
  };

  const toggleBookmark = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id
          ? {
              ...card,
              isBookmarked: !card.isBookmarked,
              bookmarks: card.isBookmarked
                ? card.bookmarks - 1
                : card.bookmarks + 1,
            }
          : card
      )
    );
  };

  return (
    <div className="card-container">
      {cards.map((card) => (
        <div key={card.id} className="card relative group">
          {/* Card Image */}
          <img src={card.image} alt="card" />

          {/* Title on Hover (Left Side) */}
          <div className="hover-title absolute left-2 top-2 opacity-0 group-hover:opacity-100 transition duration-300 bg-white p-2 rounded-lg shadow">
            {card.title}
          </div>

          {/* Hover Icons (Right Side) */}
          <div className="hover-icons absolute right-2 top-2 flex opacity-0 group-hover:opacity-100 transition duration-300 gap-2">
            <button onClick={() => toggleLike(card.id)} className="icon-btn">
              {card.isLiked ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
            </button>
            <button
              onClick={() => toggleBookmark(card.id)}
              className="icon-btn"
            >
              {card.isBookmarked ? (
                <FaBookmark className="text-blue-500" />
              ) : (
                <FaRegBookmark />
              )}
            </button>
          </div>

          {/* Footer Section */}
          <div className="card-footer">
            <div className="user-info">
              <img src={card.userImage} alt="User" className="user-img" />
              <span className="creator-name">{card.creator}</span>
            </div>
            <div className="likes-info">
              <FaHeart />
              <span>{card.likes}</span>
              <FaBookmark />
              <span>{card.bookmarks}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
