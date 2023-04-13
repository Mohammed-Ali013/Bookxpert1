import React, { useState } from 'react';
import "./Blogs.css"
const BlogList = [
  { id: 1, title: ' The Amazon Book Review', content: ' Check out the Amazon Book Review for everything that a book lover could ask for: spotlights on a variety of genres, celebrity book picks, and author interviews, all organized within a bright, easy-to-navigate book blog. Peruse "best of" lists, book reviews, and celebrity picks to stay up to date on the latest word in the literary sphere. ' },
  { id: 2, title: 'Bustle Books', content: 'Offering a take on the literary world centered around millennial women, Bustle Books poignant think pieces and spotlight on the unexpected influences of fanfiction provide a unique and meaningful perspective on the written word that will particularly speak to writing enthusiasts who grew up alongside the internet. ' },
  { id: 3, title: 'The Millions', content: 'The Millions is a spunky online magazine flush with articles that are unafraid to venture into off-the-wall and unconventional literary topics. You can search for your favorite books to view all the articles and essays that mention them, or you can delve into current book news and featured topics.' },
  { id: 4, title: 'The Life in Books', content: 'Blogger Susan Osborne has done it all—she has worked in book sales, as a writer, and as a magazine editor. As she puts it, her aims are to "select snippets of book news that interest [her], talk about some of the books [she] just read and alert readers to titles that might not find themselves in the glare of the publicity spotlight." Look to this blog for topical book news, thoughtful reviews, lovingly selected recommendations, and other musings of a woman happily mired in the world of literature.' },
  { id: 5, title: ' The Guardian Books Blog', content: 'Dive into the Guardians Books Blog to discover a variety of engrossing articles on the books we know and love and their effects on us, as well as readings into lesser-known works that deserve more attention. Community interaction and commentary is encouraged; come here to discuss your favorite books or your latest read with fellow bibliophiles' },
  { id: 6, title: 'The Reedsy', content: 'This blog features "curated collections of the best stories this planet has to offer." You will get lost scrolling through the available posts promising content such as "50 Subgenres and Their Must-Reads." Their posts follow trending, relevant topics in the literary world with a dash of lifestyle on the side. Their site also includes lists of book recommendations and newly published works just waiting to be discovered.' },
  { id: 7, title: 'Reader Witch', content: 'Blogger Alexandras energetic voice enchants readers as she examines her favorite books and shares her impressions of and thoughts on her most recent reads. Literary with an aesthetic twist, this blog celebrates the beauty of books; youll enjoy the artfully arranged book photoshoots and book cover features just as much as the lively articles themselves.' },
  { id: 8, title: 'Flavorwire Books', content: 'Tidy and modern, Flavorwire offers several monthly articles that examine both time-honored classics and contemporary publications. Its fresh take on the literary world blends book culture with pop culture, lending an original flavor to its featured essays and reviews.' },
  { id: 9, title: 'From First Page to Last', content: 'From First Page to Last is a colorful blog that spotlights books, authors, and publishers of all genres. You can search for reviews by reviewer or book title. If you enjoy getting the inside scoop on the makings and thoughts behind a novel, this is the blog for you!' },
  { id: 10, title: 'Bookforum', content: 'The Bookforum blog is a digital extension of the well-known book review magazine of the same name, which is published five times per year. Much of the print magazine fare (reviews, essays, and industry news) and a significant amount of exclusive web content can be found on the blog. Browse archived articles and new content—the blog is updated daily—to catch up on the whos who and the latest news in the literary world.' },
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs = BlogList.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
        <div className='search'>
      <input className='searchbar text-primary'
        type="text"
        placeholder="Search blogs"
        value={searchTerm}
        onChange={handleInputChange}
      /></div>
      <div className='list'>
      {filteredBlogs.length > 0 ? (
        <ul className='blog' >
          {filteredBlogs.map((blog) => (
            <li key={blog.id}>
              <h3 className='bl'>{blog.title}</h3>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h4 className='text-danger text-center'>No blogs found</h4>
      )}
      </div> 
    </div>
  );
};

export default Blogs;
