import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Button, Container, Row, Col, Modal, Card } from 'react-bootstrap';
import InventoryService from '../services/InventoryService';


// Custom CSS class for the table
const customTableClass = "custom-table";

function GetAllComponent() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInventoryItems = async () => {
      try {
        const response = await InventoryService.getItem();
        setInventoryItems(response.data);
      } catch (error) {
        console.error('Error fetching inventory items:', error);
      }
    };

    fetchInventoryItems();
  }, []);

  const handleView = (itemId) => {
    console.log('Viewing item with ID:', itemId);
    navigate(`/view-inventory/${itemId}`);
  };
  
  const handleUpdate = (itemId) => {
    console.log('Updating item with ID:', itemId);
    navigate(`/update-item/${itemId}`);
  };

  const handleDelete = async (itemId) => {
    try {
      await InventoryService.deleteItem(itemId);

      setInventoryItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );

      setShowModal(true); // Show the success modal
      console.log(`Delete item with ID: ${itemId}`);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Container className="vh-200 d-flex flex-column mb-5">
      <Row className="justify-content-between align-items-center mb-5 mt-5">
        <Col>
          <h2>Inventory Items</h2>
        </Col>
        <Col xs="auto">
          <Link to="/create-inventory">
            <Button variant="success">Create Item</Button>
          </Link>
        </Col>
      </Row>
      <Card>
        <Card.Body>
          <Table bordered striped responsive="md" className={`${customTableClass} table-hover`}>
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Nama Barang</th>
                <th>Jumlah</th>
                <th>Harga Satuan</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nama_barang}</td>
                  <td>{item.jumlah}</td>
                  <td>{item.harga_satuan}</td>
                  <td className="d-flex justify-content-center">
                    <Button variant="info" className="me-2" onClick={() => handleView(item.id)}>
                      View
                    </Button>
                    <Button variant="warning" className="me-2" onClick={() => handleUpdate(item.id)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Notification Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Item Deleted</Modal.Title>
        </Modal.Header>
        <Modal.Body>Item has been successfully deleted.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default GetAllComponent;
