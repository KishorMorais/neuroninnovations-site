import { isAdminAuthenticated } from "../../lib/adminAuth";
import LoginForm from "./LoginForm";
import ClientInfoDashboard from "./ClientInfoDashboard";

export const dynamic = "force-dynamic";

export default async function ClientInfoPage() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return <LoginForm />;
  }

  return <ClientInfoDashboard />;
}