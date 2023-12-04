document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
  
    // Dummy blog data for demonstration
    const blogData = [
      {
        id: 1,
        title: 'Best countries to visit in the world',
        content: 'Here, is the list of countries which you can visit...',
      },
      {
        id: 2,
        title: 'Top 10 hotels in the world',
        content: 'Good hotels always provide you with satisfaction you need while traveling...',
      },
      {
        id: 3,
        title: 'Top 10 Health tips while traveling',
        content: 'When you go traveling, taking care of your health is the most important thing you can do...',
      },
      {
        id: 4,
        title: 'Best Mexican Foods to eat',
        content: 'Mexico is known for its delicious & variety of foods...',
      },
      {
        id: 5,
        title: 'Things to carry while traveling',
        content: 'It is very annoying when your daily essentials get left behind at home ...',
      },
    ];
  
    function renderHomePage() {
      content.innerHTML = '';
      blogData.forEach(blog => {
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `
          <h2>${blog.title}</h2>
          <p>${blog.content}</p>
          <a href="#" onclick="viewPost(${blog.id})" class="read-more">Read more</a>
        `;
        content.appendChild(post);
      });
    }
  
    function renderPostDetail(postId) {
      const post = blogData.find(blog => blog.id === postId);
      if (post) {
        content.innerHTML = `
          <div class="post">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <a href="#" onclick="renderHomePage()" class="back-link">Back to Home</a>
          </div>
        `;
      } else {
        content.innerHTML = '<p>Post not found</p>';
      }
    }
  
    function viewPost(postId) {
      renderPostDetail(postId);
    }
  
    renderHomePage();
  });
  