import React, { useState } from 'react';
import axios from 'axios';

const CrudForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    marca: '',
    cantidad: '',
    descripcion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/bicis/', formData);
      console.log('Create response:', response.data);
      // Puedes hacer algo con la respuesta, actualizar la interfaz, etc.
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/api/bicis/${formData.id}`, formData);
      console.log(response)
      console.log('Update response:', response.data);
      // Puedes hacer algo con la respuesta, actualizar la interfaz, etc.
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/bicis/${formData.id}`);
      console.log('Delete response:', response.data);
      // Puedes hacer algo con la respuesta, actualizar la interfaz, etc.
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <form>
        <label>ID:</label>
        <input type="text" name="id" value={formData.id} onChange={handleChange} />

        <label>Marca:</label>
        <input type="text" name="marca" value={formData.marca} onChange={handleChange} />

        <label>Cantidad:</label>
        <input type="text" name="cantidad" value={formData.cantidad} onChange={handleChange} />

        <label>Descripción:</label>
        <input type="text" name="descripcion" value={formData.descripcion} onChange={handleChange} />

        <button type="button" onClick={handleCreate}>Crear</button>
        <button type="button" onClick={handleUpdate}>Actualizar</button>
        <button type="button" onClick={handleDelete}>Eliminar</button>
      </form>
    </div>
  );
};

export default CrudForm;
