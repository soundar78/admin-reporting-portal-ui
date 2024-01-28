/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import './styles.css'
import Model from 'components/Model'

const data = [
  {
    id: 1,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 2,
    legalname: 'BadgerToll2',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 3,
    legalname: 'BadgerToll3',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 4,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 5,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 6,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 7,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 8,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 9,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 10,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 11,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 12,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 13,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 14,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 15,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 16,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 17,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 18,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 19,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 20,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  },
  {
    id: 21,
    legalname: 'BadgerToll',
    dba: 'BGR',
    plan: 'TollGuard And T...',
    contract: '#PC-246Z',
    firstname: 'Heidi',
    lastname: 'Ables',
    email: 'badgertoll@mail.com',
    status: 'active',
    createddate: '11/02/23s'
  }
]

const pageButtonRenderer = ({ page, active, disable, title, onPageChange }) => {
  const handleClick = (e) => {
    e.preventDefault()
    onPageChange(page)
  }
  const activeStyle = {}
  if (active) {
    activeStyle.backgroundColor = 'black'
    activeStyle.color = 'white'
  } else {
    activeStyle.backgroundColor = '#EEEEEE'
    activeStyle.color = 'black'
  }
  if (typeof page === 'string') {
    activeStyle.backgroundColor = 'white'
    activeStyle.color = 'black'
  }
  return (
    <li className="page-item">
      <a href="#" onClick={handleClick} style={activeStyle}>
        {page}
      </a>
    </li>
  )
}

const options = {
  pageButtonRenderer
}

const ManageCompanyTable = () => {
  function hyperLink(cell, row) {
    {
      return (
        <span>
          <Model cell={cell} data={data} />
        </span>
      )
    }
  }

  const columns = [
    // {
    //   dataField: 'id',
    //   text: 'Product ID',
    //   sort: true
    // },
    {
      dataField: 'legalname',
      text: 'Legal Name',
      sort: true,
      formatter: hyperLink
    },
    {
      dataField: 'dba',
      text: 'DBA',
      sort: true
    },
    {
      dataField: 'plan',
      text: 'Plan',
      sort: true
    },
    {
      dataField: 'contract',
      text: 'Contract',
      sort: true,
      formatter: hyperLink
    },
    {
      dataField: 'firstname',
      text: 'First Name',
      sort: true
    },
    {
      dataField: 'lastname',
      text: 'Last Name',
      sort: true
    },
    {
      dataField: 'email',
      text: 'Email',
      sort: true
    },
    {
      dataField: 'status',
      text: 'Status',
      sort: true
    },
    {
      dataField: 'createddate',
      text: 'Created Date',
      sort: true
    }
  ]
  return (
    <>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        headerWrapperClasses="foo"
        pagination={paginationFactory(options)}
        selectRow={{ mode: 'checkbox' }}
      />
    </>
  )
}

export default ManageCompanyTable
