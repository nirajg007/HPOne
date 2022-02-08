import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/actions/users';

const UsersListComponent = (props) => {

    const { pageSize, rowsPerPageOptions, checkboxSelection } = props
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const columns = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'username', headerName: 'Username ', width: 130 },
        {
            field: 'email',
            headerName: 'Email',
            type: 'Email',
            width: 130,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            type: 'phone',
            width: 130,
        },
    ];

    useEffect(() => {

        function getUsersList() {
            dispatch(getUsers());
        }
        getUsersList()
    }, [])
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={pageSize}
                rowsPerPageOptions={[rowsPerPageOptions]}
                checkboxSelection={checkboxSelection}
            />
        </div>
    );
}
export default UsersListComponent;