import Link from 'next/link';
import React from 'react';
import useContactUs from '../hooks/useContactUs';
import { Container } from 'react-bootstrap';
export default function Contact() {
  const { setFormData, isLoading, handleSubmit, formData } = useContactUs();
  return (
    <div>
      <div className='contact' id='contact-us-section'>
        <Container>
          <form>
            <div className='contactHeader'>
              <h1 className='mainHeading'>Contact US</h1>
              <h1 className='subHeading'>We reply fast</h1>
            </div>
            <div className='inputs'>
              <input
                type={'text'}
                placeholder={'Name...'}
                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                value={formData.fullname}
                required
              />
              <input
                type={'email'}
                placeholder={'Email...'}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                value={formData.email}
                required
              />
              <input
                type={'text'}
                placeholder={'Message...'}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                value={formData.message}
                required
              />
            </div>
            <div className='sendBtn'>
              <Link href='#' className='send' type='submit' onClick={handleSubmit}>
                Send
              </Link>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
}
