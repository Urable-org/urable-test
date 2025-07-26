import React from 'react';

function PricingTable() {
  return (
    <section className="pricing-table">
      <h2>Pricing</h2>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Price</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic</td>
            <td>$10/month</td>
            <td>Basic task management</td>
          </tr>
          <tr>
            <td>Pro</td>
            <td>$20/month</td>
            <td>Advanced task management</td>
          </tr>
          <tr>
            <td>Enterprise</td>
            <td>Custom</td>
            <td>Custom solutions</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default PricingTable;