import Student from "../models/student.js";




export const getStudents = async (req, res) => {
  try {
    const data = await Student.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Student.findById(id);
    if (!data) {
      res.status(404).json({ message: `Student with id ${id} not found` });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const createStudent = async (req, res) => {
  try {
    console.log(req.body);
    const { name, first_name, email } = req.body;
      const data = await Student.create({ name, first_name, email });
      res.status(201).json(data);
    }
   catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const modifyStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, first_name, email } = req.body;

    let update = {};

    if (name) update.name = name;
    if (first_name) update.first_name = first_name;
    if (email) update.email = email;

    const data = await Student.findByIdAndUpdate(id,update, { new: true });
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


