import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Filter } from '../../../ui';

export function TablePrincipalDashboard(props) {

    const columns = [
        {
            name: "Nombres",
            selector: (row) => row.nombre,
            sortable: true,
        },
        {
            name: "Descripcion",
            selector: (row) => row.descripcion,
            sortable: true,
        },
        {
            name: "Acciones",
            button: true,
            cell: (row) => (
                <>
                    <Button
                        size="sm"
                        variant="success"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Actualizar Localidad"
                        onClick={() => console.log(row)}
                        className="table-cte boton ms-1"
                    >
                        <FaPencilAlt />
                    </Button>
                    <Button
                        size="sm"
                        variant="danger"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Eliminar Localidad"
                        onClick={() => console.log(row.id, row.nombre)}
                        className="table-cte boton ms-1"
                    >
                        <FaTrashAlt />
                    </Button>
                </>
            ),
        },
    ];

    const [filterText, setFilterText] = useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const filteredItems = props.data
        ? props.data.filter(
            (item) =>
                JSON.stringify(item)
                    .toLowerCase()
                    .indexOf(filterText.toLowerCase()) !== -1
        )
        : "";

    const subHeaderComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };

        return (
            <Filter
                onFilter={(e) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <DataTable
            columns={columns}
            data={filteredItems}
            defaultSortField="nombre"
            striped
            pagination
            subHeader
            subHeaderComponent={subHeaderComponent}
        />
    );
}
