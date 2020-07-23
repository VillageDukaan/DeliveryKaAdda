const Boy = require('./../models/boyModel');

exports.getAllBoys = async (req, res) => {
  try {
    const boys = await Boy.find();

    res.status(200).json({
      status: 'success',
      results: boys.length,
      data: {
        boys,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
};

exports.getBoy = async (req, res) => {

  try {
    const boy = await Boy.findById(req.params.id)
    if (!boy) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        boy,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
};

exports.createBoy = async (req, res) => {
  try {
    const newBoy = await Boy.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        boy: newBoy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent',
    });
  }
};

exports.updateBoy = async (req, res) => {
  try {
    const boy = await Boy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json({
      status: 'success',
      data: {
        boy
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
};

exports.deleteBoy = async (req, res) => {
  try {
    const boy = await Boy.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'success',
      data: {
        boy
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
};
