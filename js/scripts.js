<script>
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('recipeModal');
    const recipeContent = document.getElementById('recipeContent');
    const closeBtn = document.querySelector('.close');

    const recipeData = {
        "奶酪": ["奶油", "糖", "蛋", "麵粉"],
        "巴斯克起司蛋糕": ["巧克力", "奶油", "蛋"],
        "甜點3": ["牛奶", "麵粉", "糖", "雞蛋"]
    };

    // 綁定所有查看食譜按鈕的點擊事件
    document.querySelectorAll('.view-recipe-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // 防止事件冒泡
            const card = button.closest('.card');
            const title = card.querySelector('.menu-item-title').innerText;
            const ingredients = recipeData[title];

            if (ingredients) {
                let htmlContent = `<h3>${title} 食譜</h3><ul>`;
                ingredients.forEach(ingredient => {
                    htmlContent += `
                        <li>
                            <input type="checkbox" id="${ingredient}">
                            <label for="${ingredient}">${ingredient}</label>
                        </li>
                    `;
                });
                htmlContent += `</ul>`;
                recipeContent.innerHTML = htmlContent;
                modal.style.display = 'block';
            } else {
                recipeContent.innerHTML = '無食譜資料';
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
