const News = require('../news/newsApp');
const imageProcess = require('../util/imageProcess');

const news = new News();

const createNews = async (req, res) => {
  const id = news.createId();

  try {
    const imageName = await imageProcess(req, id);
    news.create(req.body, id, imageName); // http://locahost:3000/image-name
    res.json({ success: true, message: 'Post criado com sucesso !' });
  } catch (error) {
    res.json({
      success: false,
      message: 'Algo deu errado, erro no servidor',
    });
    console.log('Erro ao criar notícias', error.message);
  }
};

const getAllNews = async (req, res) => {
  try {
    const data = await news.getAll();
    res.json({ success: true, news: data });
  } catch (error) {
    res.json({
      success: false,
      message: 'Algo deu errado, erro no servidor !',
    });
    console.log('Erro ao listar todas as notícias', error.message);
  }
};

const getSingleNews = async (req, res) => {
  try {
    const data = await news.getSingle(req.params.id);
    if (!data) {
      return res.json({
        success: false,
        message: 'Postagem não encontrada',
      });
    }

    res.json({
      success: true,
      news: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'Algo deu errado, erro do servidor!',
    });
    console.log('Erro ao listar todas as notícias', error.message);
  }
};

const getNewsByCategory = async (req, res) => {
  try {
    const { category, qty } = req.params;
    const data = await news.getByCategory(category);
    if (!data) {
      return res.json({ success: false, message: 'Postagem não encontrada' });
    }

    if (qty) {
      return res.json({ success: true, news: [...data].splice(0, qty) });
    }

    res.json({ success: true, news: data });
  } catch (error) {
    res.json({
      success: false,
      message: 'Algo deu errado, erro do servidor!',
    });
    console.log('Erro ao obter notícias por categoria!', error.message);
  }
};

const searchPosts = async (req, res) => {
  try {
    const { query } = req.params;
    if (query.trim()) {
      const response = await news.searchPosts(req.params.query);
      if (response.length === 0)
        return res.json({ success: false, message: 'Nenhuma combinação encontrada..' });
      res.json({ success: true, news: response });
    }

    res.json({ success: false, message: 'Nenhuma combinação encontrada..' });
  } catch (error) {
    res.json({
      success: false,
      message: 'Algo deu errado, erro do servidor!',
    });
    console.log(error);
  }
};

module.exports = {
  createNews,
  getAllNews,
  getSingleNews,
  getNewsByCategory,
  searchPosts,
};
