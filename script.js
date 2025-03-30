document.body.style.cssText = 'background-color: #bbaacc; display: flex; justify-content: center; margin-top: 100px;';
const blockWindow = document.createElement('div');
const blockWindow_id = blockWindow.id = 'block_window';
const blockWindow_className = blockWindow.className = 'block_window';
blockWindow.style.cssText = 'display: flex; flex-direction: column; gap: 20px;  background-color: white; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); width: 500px; height: 300px; border-radius: 10px; padding: 30px 20px;';
document.body.appendChild(blockWindow);
//title
const titleWindow = document.createElement('h1');
titleWindow.textContent = 'To do App';
titleWindow.id = 'title_window';
titleWindow.style.cssText = '';
blockWindow.insertAdjacentElement("afterbegin", titleWindow);

// block - div of input and button = add
const addTarget_div = document.createElement('div');
addTarget_div.style.cssText = 'width: 500px; height: 50px; display: flex; flex-direction: row; gap: 20px;';
blockWindow.appendChild(addTarget_div);
//input
const addTarget_input = document.createElement('input');
addTarget_input.style.cssText = 'width: 430px; height: 50px; box-shadow: 0 10px 30px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); border: 0.5px solid black; border-radius: 5px; font-weight: 500; font-size: 20px; font-family: Montserrat;';
addTarget_div.appendChild(addTarget_input);
// button add
const addTarget_button = document.createElement('button');
addTarget_button.textContent = 'Add';
addTarget_button.style.cssText = 'width: 70px; height: 50px; background: blue; border: 2px solid #000; box-shadow: 0 20px 20px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); border-radius: 5px; cursor: pointer; color: #fff; font-weight: 600; font-size: 20px; font-family: Montserrat;'
addTarget_div.appendChild(addTarget_button);