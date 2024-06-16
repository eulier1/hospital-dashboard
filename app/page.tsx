import PatientList from "@/components/PatientList";
import DiagnosisHistory from '@/components/DiagnosisHistory';
import DiagnosticList from "@/components/DiagnosticList";
import PatientProfile from "@/components/PatientProfile";
import LabResultsList from "@/components/LabResultList";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center md:grid md:grid-rows-1 md:grid-flow-col md:gap-x-8 md:grid-cols-4 min-h-screen mx-4">
      <section className="mb-8 lg:mb-0" > <PatientList/> </section>
      <section className="mb-8 lg:mb-0 grid grid-cols-1 md:col-start-2 col-end-4 gap-8">
        <DiagnosisHistory />
        <DiagnosticList />
      </section>
      <section className="mb-8 lg:mb-0 grid grid-cols-1 gap-8">
        <PatientProfile />
        <LabResultsList />
      </section>
    </main>
  );
}
