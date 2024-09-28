import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    // Basic Personal Information
    landlordFullName: '',
    tenantFullName: '',
    landlordAddress: '',
    tenantAddress: '',
    landlordPhone: '',
    tenantPhone: '',
    landlordEmail: '',
    tenantEmail: '',

    // Identification Documents
    landlordAadhaar: '',
    tenantAadhaar: '',
    landlordPassport: '',
    tenantPassport: '',

    // Occupation and Employer (Tenant)
    tenantOccupation: '',
    tenantEmployer: '',

    // Bank Account Details (Landlord)
    landlordBankAccount: '',
    landlordBankBranch: '',

    // Rent Payment Information
    monthlyRent: '',
    rentDueDate: '',
    rentPaymentMethod: '',

    // Security Deposit
    securityDeposit: '',
    refundTerms: '',

    // Lease Duration
    leaseStartDate: '',
    leaseEndDate: '',

    // Property Address
    propertyAddress: '',

    // Witness Details
    witness1Name: '',
    witness1Signature: '',
    witness2Name: '',
    witness2Signature: '',
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div className="user-profile">
      <h2>Rental Agreement Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Basic Personal Information */}
        <fieldset>
          <legend>Basic Personal Information</legend>

          <label>
            Landlord Full Legal Name:
            <input type="text" name="landlordFullName" value={userInfo.landlordFullName} onChange={handleChange} />
          </label>
          <label>
            Tenant Full Legal Name:
            <input type="text" name="tenantFullName" value={userInfo.tenantFullName} onChange={handleChange} />
          </label>

          <label>
            Landlord Current Residential Address:
            <input type="text" name="landlordAddress" value={userInfo.landlordAddress} onChange={handleChange} />
          </label>
          <label>
            Tenant Current Residential Address:
            <input type="text" name="tenantAddress" value={userInfo.tenantAddress} onChange={handleChange} />
          </label>

          <label>
            Landlord Phone Number:
            <input type="text" name="landlordPhone" value={userInfo.landlordPhone} onChange={handleChange} />
          </label>
          <label>
            Tenant Phone Number:
            <input type="text" name="tenantPhone" value={userInfo.tenantPhone} onChange={handleChange} />
          </label>

          <label>
            Landlord Email Address:
            <input type="email" name="landlordEmail" value={userInfo.landlordEmail} onChange={handleChange} />
          </label>
          <label>
            Tenant Email Address:
            <input type="email" name="tenantEmail" value={userInfo.tenantEmail} onChange={handleChange} />
          </label>
        </fieldset>

        {/* Identification Documents */}
        <fieldset>
          <legend>Identification Documents</legend>

          <label>
            Landlord Aadhaar:
            <input type="text" name="landlordAadhaar" value={userInfo.landlordAadhaar} onChange={handleChange} />
          </label>
          <label>
            Tenant Aadhaar:
            <input type="text" name="tenantAadhaar" value={userInfo.tenantAadhaar} onChange={handleChange} />
          </label>

          <label>
            Landlord Passport:
            <input type="text" name="landlordPassport" value={userInfo.landlordPassport} onChange={handleChange} />
          </label>
          <label>
            Tenant Passport:
            <input type="text" name="tenantPassport" value={userInfo.tenantPassport} onChange={handleChange} />
          </label>
        </fieldset>

        {/* Occupation and Employer (Tenant) */}
        <fieldset>
          <legend>Occupation and Employer (Tenant)</legend>

          <label>
            Tenant Occupation:
            <input type="text" name="tenantOccupation" value={userInfo.tenantOccupation} onChange={handleChange} />
          </label>
          <label>
            Tenant Employer:
            <input type="text" name="tenantEmployer" value={userInfo.tenantEmployer} onChange={handleChange} />
          </label>
        </fieldset>

        {/* Bank Account Details (Landlord) */}
        <fieldset>
          <legend>Bank Account Details (Landlord)</legend>

          <label>
            Landlord Bank Account Number:
            <input type="text" name="landlordBankAccount" value={userInfo.landlordBankAccount} onChange={handleChange} />
          </label>
          <label>
            Bank Branch:
            <input type="text" name="landlordBankBranch" value={userInfo.landlordBankBranch} onChange={handleChange} />
          </label>
        </fieldset>

        {/* Rent Payment Information */}
        <fieldset>
          <legend>Rent Payment Information</legend>

          <label>
            Monthly Rent Amount:
            <input type="number" name="monthlyRent" value={userInfo.monthlyRent} onChange={handleChange} />
          </label>
          <label>
            Rent Due Date:
            <input type="date" name="rentDueDate" value={userInfo.rentDueDate} onChange={handleChange} />
          </label>
          <label>
            Rent Payment Method:
            <input type="text" name="rentPaymentMethod" value={userInfo.rentPaymentMethod} onChange={handleChange} />
          </label>
        </fieldset>

        {/* Security Deposit */}
        <fieldset>
          <legend>Security Deposit</legend>

          <label>
            Security Deposit Amount:
            <input type="number" name="securityDeposit" value={userInfo.securityDeposit} onChange={handleChange} />
          </label>
          <label>
            Terms for Refund:
            <textarea name="refundTerms" value={userInfo.refundTerms} onChange={handleChange} />
          </label>
        </fieldset>

        {/* Lease Duration */}
        <fieldset>
          <legend>Lease Duration</legend>

          <label>
            Lease Start Date:
            <input type="date" name="leaseStartDate" value={userInfo.leaseStartDate} onChange={handleChange} />
          </label>
          <label>
            Lease End Date:
            <input type="date" name="leaseEndDate" value={userInfo.leaseEndDate} onChange={handleChange} />
          </label>
        </fieldset>

        {/* Property Address */}
        <fieldset>
          <legend>Property Address</legend>

          <label>
            Rental Property Address:
            <input type="text" name="propertyAddress" value={userInfo.propertyAddress} onChange={handleChange} />
          </label>
        </fieldset>

        {/* Witness Details */}
        <fieldset>
          <legend>Witness Details</legend>

          <label>
            Witness 1 Name:
            <input type="text" name="witness1Name" value={userInfo.witness1Name} onChange={handleChange} />
          </label>
          <label>
            Witness 1 Signature:
            <input type="text" name="witness1Signature" value={userInfo.witness1Signature} onChange={handleChange} />
          </label>

          <label>
            Witness 2 Name:
            <input type="text" name="witness2Name" value={userInfo.witness2Name} onChange={handleChange} />
          </label>
          <label>
            Witness 2 Signature:
            <input type="text" name="witness2Signature" value={userInfo.witness2Signature} onChange={handleChange} />
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserProfile;
