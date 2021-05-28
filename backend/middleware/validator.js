const { check, validationResult } = require('express-validator');

const exceptedCategory = ['entertainment', 'political', 'tech']

const validator = [
  check('title').trim().not().isEmpty().withMessage('Título obrigatório'),
  check('content').trim().not().isEmpty().withMessage('Conteúdo obrigatório'),
  check('category').isIn(exceptedCategory).withMessage('Selecione um categoria'),
]

const result = (req, res, next) => {
  const result = validationResult(req);
  const hasError = !result.isEmpty();

  if (hasError) {
    const error = result.array()[0].msg
    res.json({ sucess: false, message: error })
  }

  next()
}

const validateFile = (req, res, next) => {
  const exceptedFileType = ['png', 'jpg', 'jpeg']
  if (!req.file) {
    return res.json({ sucess: false, message: 'Imagem obrigatória' })
  }

  const fileExtension = req.file.mimetype.split('/').pop();
  if (!exceptedFileType.includes(fileExtension)) {
    return res.json({ sucess: false, message: 'Imagem inválida, formato válido [png, jpeg, jpg]' })
  }

  next();
}

module.exports = {
  validator,
  result,
  validateFile
}