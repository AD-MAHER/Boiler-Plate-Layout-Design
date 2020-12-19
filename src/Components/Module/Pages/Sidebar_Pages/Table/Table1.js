import { Breadcrumb } from 'antd';
import { NavLink } from "react-router-dom";
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { TableTheme } from './TableStyle';

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async (e) => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{
                        paddingRight: 24,
                    }}
                    onClick={toggleEdit}
                >
                    {children}
                </div>
            );
    }

    return <td {...restProps}>{childNode}</td>;
};


export default class Table1 extends React.Component {

    state1 = {

        rowSelection: {},

    };
    constructor(props) {
        super(props);
        this.columns = [

            {
                title: 'name',
                dataIndex: 'name',
                width: '30%',
                editable: true,
                larger: (y, z) => y.name - z.name,
            },
            {
                title: 'age',
                dataIndex: 'age',
                editable: true,
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: 'address',
                dataIndex: 'address',
                editable: true,
                sorter: (a, b) => a.address - b.address,
                filters: [
                    {
                        text: 'London',
                        value: 'London',
                    },
                    {
                        text: 'USA',
                        value: 'USA',
                    },
                    {
                        text: 'India',
                        value: 'India',
                    }
                ],
                onFilter: (value, record) => record.address.indexOf(value) === 0,
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a>Delete</a>
                        </Popconfirm>
                    ) : null,
            },
        ];
        this.state = {
            dataSource: [
                {
                    key: '0',
                    name: 'A M D ',
                    age: '21',
                    address: 'London',
                },
                {
                    key: '1',
                    name: 'Edward King ',
                    age: '32',
                    address: 'USA',
                },
            ],
            count: 2,
        };

    };


    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter((item) => item.key !== key),
        });
    };
    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `Double click to Enter Your Name`,
            age: 'Age',
            address: `Address`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    };
    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
            dataSource: newData,
        });
    };

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: (record) => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div breakPoint='sm'>
                <Breadcrumb>
                    <Breadcrumb.Item >
                        <NavLink to="/" >  Home </NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                        Table
                    </Breadcrumb.Item>
                </Breadcrumb>
                <TableTheme> 
                <Button
                    onClick={this.handleAdd}
                    type="primary"
                    style={{
                        marginBottom: 16,
                    }}
                >
                    Add New Data
        </Button>
       
                <Table
                    {...this.state1}
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
                </TableTheme>
            </div>
        );
    }
}













