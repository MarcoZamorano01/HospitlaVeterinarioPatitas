import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas generales
import LoginPage from "../Pages/Login";
import SobreNosotros from "../Pages/SobreNosotros";
import ObjetivosProyecto from "../Pages/Objetivos";
import FormularioRegistroUsuario from "../Pages/CrearCuenta";

// Rutas de Cliente
import MainPage from "../Pages/Principal";
import MisMascotas from "../Pages/MisMascotas";
import Comprobante from "../Pages/Comprobantes";
import FormualarioConsulta from "../Pages/NuevaConsulta";
import MedicamentosVenta from "../Pages/MedicamentosVenta";
import TratamientosCliente from "../Pages/TratamientosCliente";
import Cuidados from "../Pages/Cuidados";

// Rutas de Veterinarios / Administradores
import PetCards from "../Pages/MascotasPendientes";
import HistorialMedico from "../Pages/HistorialMedico";
import Calendario from "../Pages/AgendaMascotas";
import MedicamentoList from "../Pages/ListaMedicamentos";
import RegistrarMedicamentos from "../Pages/RegistrarMedicamento";
import TratamientoList from "../Pages/ListaTratamientos";
import RegistrarTratamiento from "../Pages/RegistrarTratamientos";
import DetallesMascota from "../Pages/DetalleMascota";
import UsuarioList from "../Pages/ListaUsuarios";
import Reporte from "../Pages/Reportes";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas generales */}
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/sobreNosotros" element={<SobreNosotros />} />
                <Route exact path="/objetivos" element={<ObjetivosProyecto />} />
                <Route exact path="/crearcuenta" element={<FormularioRegistroUsuario />} />
                
                {/* Rutas de Cliente */}
                <Route exact path="/misMascotas" element={<MisMascotas />} />
                <Route exact path="/comprobantes" element={<Comprobante />} />
                <Route exact path="/nuevaConsulta" element={<FormualarioConsulta />} />
                <Route exact path="/ventaMedicamentos" element={<MedicamentosVenta />} />
                <Route exact path="/detalleMascota" element={<DetallesMascota />} />
                <Route exact path="/tratamientosCliente" element={<TratamientosCliente />} />
                <Route exact path="/cuidados" element={<Cuidados />} />
                
                {/* Rutas de Veterinarios / Administradores */}
                <Route exact path="/mascotasPendientes" element={<PetCards />} />
                <Route exact path="/historialMedico" element={<HistorialMedico />} />
                <Route exact path="/agenda" element={<Calendario />} />
                <Route exact path="/medicamentos" element={<MedicamentoList />} />
                <Route exact path="/registrarMedicamentos" element={<RegistrarMedicamentos />} />
                <Route exact path="/tratamientos" element={<TratamientoList />} />
                <Route exact path="/registrarTratamientos" element={<RegistrarTratamiento />} />
                <Route exact path="/gestionUsuarios" element={<UsuarioList />} />
                <Route exact path="/reporte" element={<Reporte />} />
            </Routes>
        </BrowserRouter>
    );
}
