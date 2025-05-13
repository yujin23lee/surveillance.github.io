const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const timeText = document.getElementById("time");
const locationText = document.getElementById("location");
const noteText = document.getElementById("note");

let typingTimeout; // global variable to manage timeout

// Update this array with your actual content
const data = [
  {
    img: "1.png",
    time: "12:11 PM",
    location: "(41.8271665,-71.4063957)",
    note: "She left the dorm and walked quickly with her airpods."
  },
  {
    img: "2.png",
    time: "12:40 PM",
    location: "(41.8273049,-71.4073811)",
    note: "She stoped in front of the traffic light."
  },
  {
    img: "3.png",
    time: "1:09 PM",
    location: "(41.8183435,-71.4004177)",
    note: "Purchased dark chocolate covered raisins and dark chocolate covered pretzels from Trader Joe's."
  },
  {
    img: "4.png",
    time: "1:38 PM",
    location: "(41.8270501,-71.4061144)",
    note: "She ate rice and fried eggs from the Met and washed her hands before she left."
  },
  {
    img: "5.png",
    time: "2:45 PM",
    location: "(41.8271742,-71.4063451)",
    note: "She left the Met with her airpods."
  },
  {
    img: "6.png",
    time: "3:00 PM",
    location: "(41.8269976,-71.4093029)",
    note: "She worked on her Spatial Dynamic group project with her classmates."
  },
  {
    img: "7.png",
    time: "5:23 PM",
    location: "(41.8260010,-71.4085224)",
    note: "She walked across the street and headed to the Fleet Library."
  },
  {
    img: "8.png",
    time: "5:30 PM",
    location: "(41.8254381,-71.4085344)",
    note: "She quickly crossed the bridge to cross the crosswalk."
  },
  {
    img: "9.png",
    time: "5:33 PM",
    location: "(41.8253277,-71.4094246)",
    note: "She entered the Fleet Library building."
  },
  {
    img: "11.png",
    time: "5:40 PM",
    location: "(41.8254976,-71.4095718)",
    note: "She used ReusePass to get the green container for the food."
  },
  {
    img: "10.png",
    time: "6:00 PM",
    location: "(41.8254976,-71.4095718)",
    note: "She left with rice, vegetables, and chicken in the container from the Portfolio Cafe."
  },
  {
    img: "12.png",
    time: "06:21 PM",
    location: "(41.8273029,-71.4065570)",
    note: "She returned to the Homer Hall by entering through the third floor entrance."
  },
  {
    img: "13.png",
    time: "07:40 PM",
    location: "(41.8274226,-71.4061848)",
    note: "She sat on the sofa in Homer fourth floor and finished her HPSS essay."
  },
  {
    img: "14.png",
    time: "11:58 PM",
    location: "(41.8274226,-71.4061848)",
    note: "She moved to Homer fifth floor to continue working on her essay and THAD quiz."
  },
  {
    img: "15.png",
    time: "1:21 AM",
    location: "(41.8273029,-71.4065570)",
    note: "Returned to Homer 522."
  }
];

function openModal(index) {
    const entry = data[index];
    modalImg.src = entry.img;
  
    // Clear any previous timeout and reset content
    clearTimeout(typingTimeout);
    timeText.textContent = "";
    locationText.textContent = "";
    noteText.textContent = "";
  
    let i = 0;
  
    const textParts = [
      { element: timeText, text: entry.time },
      { element: locationText, text: entry.location },
      { element: noteText, text: entry.note }
    ];
  
    let partIndex = 0;
  
    // Function to type the text
    function typeText() {
      const currentPart = textParts[partIndex];
      const text = currentPart.text;
  
      if (i < text.length) {
        currentPart.element.textContent += text.charAt(i);
        i++;
        typingTimeout = setTimeout(typeText, 30); // typing speed
      } else {
        partIndex++;
        i = 0;
        if (partIndex < textParts.length) {
          // Move to the next part (time -> location -> note)
          typingTimeout = setTimeout(typeText, 500); // delay before typing next part
        }
      }
    }
  
    typeText();
    modal.style.display = "block";
  }
  
  
  function closeModal() {
    modal.style.display = "none";
    clearTimeout(typingTimeout); // stop typing
  }
  

// Optional: click outside modal to close
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};
