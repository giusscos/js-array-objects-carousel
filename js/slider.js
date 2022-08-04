// console.log('slider')
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]

const sliderEl = document.querySelector('.slider');

function createListItem(index, srcImage, name, desc){
	const listItemEl = document.createElement('li');
	listItemEl.classList.add('slide');

	if(index === 0){
		listItemEl.classList.add('active');
	}

	// Img e Div Info Img Out
	const img = document.createElement('img');
	img.src = srcImage;
	const divTextContEl = document.createElement('div');
	divTextContEl.classList.add('slide__content');

	// Div Info Img In
	const titleContEl = document.createElement('h3');
	titleContEl.classList.add('slide__title');
	titleContEl.innerHTML = name;
	const subTitleContEl = document.createElement('p');
	subTitleContEl.classList.add('slide__description');
	subTitleContEl.innerHTML = desc;
	
	divTextContEl.append(titleContEl, subTitleContEl);

	listItemEl.append(img, divTextContEl);

	return listItemEl;
}

function createList(){
	const unListEl = document.createElement('ul');
	unListEl.classList.add('slides-wrapper');

	for(let key in slides){
		const value = slides[key];
	
		const listItem = createListItem(parseInt(key), value.url, value.title, value.description);
		slideArrayElement.push(listItem);
		unListEl.append(listItem);
	}

	return unListEl;
}

function createArrow(){
	const arrows = document.querySelector('.arrows');
	arrows.innerHTML = 
	`
		<p class="arrow-prev">
			<i class="fa-solid fa-chevron-left"></i>
		</p>
		<p class="arrow-next">
			<i class="fa-solid fa-chevron-right"></i>
		</p>
  	`;
  return arrows;
}

function nextSlide(){
	const length = slides.length;
	slideCurrentEl = slideArrayElement[counter];
    slideCurrentEl.classList.remove('active');

    if(counter < length - 1){
        counter++;
    } else {
        counter = 0;
    }

    slideNextEl = slideArrayElement[counter];
    slideNextEl.classList.add('active');
}

function prevSlide(){
	const length = slides.length;
	slideCurrentEl = slideArrayElement[counter];
    slideCurrentEl.classList.remove('active');

    if(counter > 0){
        counter--;
    } else {
        counter = length - 1;
    }

    slideNextEl = slideArrayElement[counter];
    slideNextEl.classList.add('active');
}

const slideArrayElement = [];
let counter = 0;
let slideCurrentEl, slideNextEl;

sliderEl.append(createList(), createArrow());

const nextSlideEl = document.querySelector('.arrow-next');
const prevSlideEl = document.querySelector('.arrow-prev');

nextSlideEl.addEventListener('click', nextSlide);
prevSlideEl.addEventListener('click', prevSlide);