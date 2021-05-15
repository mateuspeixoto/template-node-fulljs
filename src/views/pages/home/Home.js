import { api } from '../../../service/api';

const getJokesRandom = async () => {
  const request = await api.get('random');
  return request.data;
};

const getJokesCategory = async () => {
  const request = await api.get('categories');
  return request.data;
};

let Home = {
  is_private: false,

  render: async () => {
    const jokes = await getJokesRandom();
    const categories = await getJokesCategory();

    let view = `
          <div>
            <h1>Categorias:</h1>
            <ul class="menu-list">
              ${categories
                .map(
                  (category, index) =>
                    `<li class="menu-item" key=${index}>${category}</li>`
                )
                .join('')}
            </ul>
            <br>
            <img src=${jokes.icon_url}>
            <h2>Fatos de Chuck Norris</h2>
            <p>— "${jokes.value}"</p>
          </div>
      `;

    return view;
  },

  after_render: async () => {},
};

export default Home;