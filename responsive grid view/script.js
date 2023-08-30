// Sample data for grid items (you can replace this with your own data)
const gridItemsData = [
    {
        imageUrl: 'https://excelr.in/digital_marketing_course_hyderabad/assets/images/Skill_1.png',
        description: 'SEO Expert',
    },
    {
        imageUrl: 'https://excelr.in/digital_marketing_course_hyderabad/assets/images/Skill_2.png',
        description: 'SEO Specialist',
    },
    {
        imageUrl: 'https://excelr.in/digital_marketing_course_hyderabad/assets/images/Skill_3.png',
        description: 'Social Media Executive',
    },
    {
        imageUrl: 'https://excelr.in/digital_marketing_course_hyderabad/assets/images/Skill_4.png',
        description: 'SEO Executive',
    },
    {
        imageUrl: 'https://excelr.in/digital_marketing_course_hyderabad/assets/images/Skill_5.png',
        description: 'Social Media Manager',
    },
    {
        imageUrl: 'https://excelr.in/digital_marketing_course_hyderabad/assets/images/Skill_6.png',
        description: 'Digital Marketing Specialist',
    },
    {
        imageUrl: 'https://excelr.in/digital_marketing_course_hyderabad/assets/images/Skill_7.png',
        description: 'CDigital Marketing Manager',
    },
    {
        imageUrl: 'https://excelr.in/digital_marketing_course_hyderabad/assets/images/Skill_8.png',
        description: 'Email Marketer',
    },
    {
        imageUrl: 'https://excelr.in/digital_marketing_course_hyderabad/assets/images/Tools/Tool_1.png',
        description: 'Google Ad Expert',
    },
    {
        imageUrl: 'https://img.icons8.com/?size=1x&id=94513&format=png',
        description: ' Campaign Manager',
    },
    {
        imageUrl: 'https://image.shutterstock.com/image-vector/copywriting-concept-writer-feather-near-260nw-1021595860.jpg',
        description: 'SEO Content Writer',
    },
    {
        imageUrl: 'https://image.shutterstock.com/image-vector/bearded-man-freelancer-designer-headphones-260nw-644706529.jpg',
        description: 'Freelancer',
    },
    {
        imageUrl: 'https://img.icons8.com/?size=1x&id=0PTYqcrrBXka&format=png',
        description: 'PPC Ad Expert',
    },
    {
        imageUrl: 'https://img.icons8.com/?size=1x&id=D17g6Cf9jZQ3&format=png',
        description: 'Affiliate Marketer',
    },
    {
        imageUrl: 'https://img.icons8.com/?size=1x&id=MDFKIdDrklc2&format=png',
        description: 'OFF page SEO expert',
    },
    {
        imageUrl: 'https://img.icons8.com/?size=1x&id=6az9wbEz5UKE&format=png',
        description: 'ON page SEO Expert',
    },
    {
        imageUrl: 'https://image.shutterstock.com/image-vector/hand-giving-key-another-glyph-260nw-663568153.jpg',
        description: 'Business Owner',
    },
    {
        imageUrl: 'https://img.icons8.com/?size=1x&id=uLWV5A9vXIPu&format=png',
        description: 'Facebook Ad Expert',
    },
    // Add more items as needed
];

// Function to create grid items dynamically
function createGridItems() {
    const gridContainer = document.getElementById('grid-container');

    gridItemsData.forEach((item) => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const img = document.createElement('img');
        img.src = item.imageUrl;

        const description = document.createElement('p');
        description.textContent = item.description;

        gridItem.appendChild(img);
        gridItem.appendChild(description);

        gridContainer.appendChild(gridItem);
    });
}

// Call the function to create grid items when the page loads
window.addEventListener('load', createGridItems);
