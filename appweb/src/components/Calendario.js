import React, { useCallback, useState } from 'react';
import 'devextreme/dist/css/dx.light.css';
import { Calendar } from 'devextreme-react/calendar';
import SelectBox from 'devextreme-react/select-box';
import './Calendario.css'; // Importa el archivo CSS donde definirás el estilo para centrar el calendario

const zoomLevels = ['month', 'year', 'decade', 'century'];
const zoomLevelLabel = { 'aria-label': 'Zoom Level' };

const Calendario = () => {
    const [zoomLevel, setZoomLevel] = useState('month');

    const onZoomLevelChange = useCallback(({ value }) => {
        setZoomLevel(value);
    }, []);

    return (
        <div className="w3-container">
            <h1 className="w3-center">Calendario</h1>
            <div className="w3-margin-bottom"> {/* Eliminé la clase w3-center aquí */}
                <Calendar
                    zoomLevel={zoomLevel}
                    showTodayButton={true}
                />
            </div>
            <div className="w3-margin-top">
                <span>Zoom level: </span>
                <SelectBox
                    dataSource={zoomLevels}
                    value={zoomLevel}
                    inputAttr={zoomLevelLabel}
                    onValueChanged={onZoomLevelChange}
                />
            </div>
        </div>
    );
};

export default Calendario;
