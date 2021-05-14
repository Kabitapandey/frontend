

// courses
const course = [
    {
      id: 1,
      title: "The Python Mega Course: Build 10 Real World Applications",
      category: "Python",
      price: 129.99,
      img: "./img/13.jpg",
      desc: `Jos portilla `,
    },
    {
      id: 2,
      title: "Machine Learning A-Z™: Hands-On Python & R In Data Science ",
      category: "Python",
      price: 13.99,
      img: "./img/14.jpg",
      desc: ``,
    },
    {
      id: 3,
      title: "Learn Python Programming Masterclass",
      category: "Python",
      price: 6.99,
      img: "./img/15.jpg",
      desc: `Jose Portilla`,
    },
    {
      id: 4,
      title: "Microsoft Excel - Excel from Beginner to Advanced",
      category: "Excel",
      price: 20.99,
      img: "./img/16.jpg",
      desc: `Office Newb,Kylie Pew `,
    },
    {
      id: 5,
      title: "The Complete 2021 Web Development Bootcamp",
      category: "WebDevelopment",
      price: 22.99,
      img: "./img/17.jpg",
      desc: `Dr Anglea Yu `,
    },
    {
      id: 6,
      title: "The Complete JavaScript Course 2021: From Zero to Expert!",
      category: "Javascript",
      price: 18.99,
      img: "./img/18.jpg",
      desc: `John Smilga`,
    },
    {
      id: 7,
      title: "AWS Certified Solutions Architect - Associate 2020",
      category: "AWSCertification",
      price: 8.99,
      img: "./img/19.jpg",
      desc: `Mark Richman `,
    },
    {
      id: 8,
      title: "The Ultimate Drawing Course - Beginner to Advanced",
      category: "Drawing",
      price: 12.99,
      img: "./img/20.jpg",
      desc: `Quinton Batchelor`,
    },
    {
      id: 9,
      title: "Environment Art School: Complete Perspective Drawing Course",
      category: "Drawing",
      price: 16.99,
      img: "./img/21.jpg",
      desc: `Scott haris`,
    },
    {
      id: 10,
      title: "The Complete Web Developer Course 2.0",
      category: "WebDevelopment",
      price: 39.99,
      img: "./img/22.jpg",
      desc: `Rob Percival`,
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  const container = document.querySelector(".btn-container");
  const card=document.querySelector(".courses-card");

  
  // load items
  window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(course);
    displayMenuButtons();
  });
  
  function displayMenuItems(courses) {
    let displayMenu = courses.map(function (item) {
      // console.log(item);
  
      return `
      <div class="col-sm-4 col-md-3">
      <a href="singleItem.html" class="course-links">
      <div class="card course-card">
   
      <article class="menu-item card-img-top">
            <img src=${item.img} class="photo" alt=${item.title} />
            <div class="card-body">
              <header>
                <h4 class="item-title">${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
              </div>
          </article> </div></a></div>`
          ;
    });
    displayMenu = displayMenu.join("");
  
    card.innerHTML = displayMenu;
  }
  
  function displayMenuButtons() {
    const categories = course.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>
        ${category}
        </button>`;
      })
      .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = course.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        // console.log(menuCategory);
        if (category === "all") {
          displayMenuItems(course);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }