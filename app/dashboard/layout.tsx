"use client";

import { useSession, signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Inbox,
  ShieldAlert,
  Send,
  Bot,
  Users,
  CreditCard,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

// NotificationBell requires notification states, we will import it.
// We can fetch notification count or wrap notification component if it is client side.
import NotificationBell from "@/components/notifications/NotificationBell";
import { useEscalations } from "@/lib/hooks/escalations/useEscalation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Force Light Theme
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark");
  }, []);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  const isAdmin = session?.user?.role === "ADMIN";

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Leads Inbox", href: "/dashboard/leads", icon: Inbox },
    {
      name: "Escalation Queue",
      href: "/dashboard/leads/escalations",
      icon: ShieldAlert,
      // badge: escalations.length > 0 ? escalations.length : undefined,
    },
    { name: "Broadcast Msg", href: "/dashboard/send-message", icon: Send },
    {
      name: "Bot status",
      href: "/dashboard/toggle-bot",
      icon: Bot,
      adminOnly: true,
    },
    {
      name: "Agent Settings",
      href: "/dashboard/agents",
      icon: Users,
      adminOnly: true,
    },
    { name: "Payments Ledger", href: "/dashboard/payments", icon: CreditCard },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* ======================================= */}
      {/* DESKTOP SIDEBAR */}
      {/* ======================================= */}
      <aside
        className={cn(
          "hidden md:flex flex-col border-r border-border bg-card transition-all duration-300 relative z-20",
          sidebarOpen ? "w-64" : "w-20",
        )}
      >
        {/* LOGO AREA */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-border">
          <Link href="/dashboard" className="flex items-center gap-3 font-bold">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-extrabold text-lg shadow-md glow-primary">
              L
            </div>
            {sidebarOpen && (
              <span className="text-sm font-extrabold tracking-wide bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                LEADS AUTO
              </span>
            )}
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-md hover:bg-muted text-muted-foreground transition-colors"
          >
            {sidebarOpen ? (
              <ChevronLeft size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navigation.map((item) => {
            if (item.adminOnly && !isAdmin) return null;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group relative",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <item.icon
                  size={18}
                  className={cn(
                    "shrink-0",
                    isActive
                      ? "text-white"
                      : "text-muted-foreground group-hover:text-foreground",
                  )}
                />
                {sidebarOpen && (
                  <span className="truncate flex-1">{item.name}</span>
                )}
                {/* {item.badge && sidebarOpen && (
                  <span className="bg-destructive text-destructive-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )} */}
                {!sidebarOpen && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* USER PROFILE INFO PANEL */}
        <div className="p-4 border-t border-border bg-muted/40">
          <div
            className={cn(
              "flex items-center gap-3",
              sidebarOpen ? "" : "justify-center",
            )}
          >
            <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 border border-orange-500/20 shrink-0">
              <User size={18} />
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate leading-none mb-1">
                  {session?.user?.name || "System User"}
                </p>
                <span className="inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-primary/10 text-primary uppercase tracking-wide">
                  {session?.user?.role || "Agent"}
                </span>
              </div>
            )}
          </div>
          {sidebarOpen ? (
            <button
              onClick={handleLogout}
              className="mt-4 w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-all border border-transparent hover:border-destructive/20"
            >
              <LogOut size={16} />
              <span>Log Out</span>
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="mt-4 p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-all block mx-auto"
              title="Log Out"
            >
              <LogOut size={16} />
            </button>
          )}
        </div>
      </aside>

      {/* ======================================= */}
      {/* MOBILE HEADER & DRAWER */}
      {/* ======================================= */}
      <div className="md:hidden flex flex-col w-full h-screen overflow-hidden">
        <header className="h-16 flex items-center justify-between px-4 border-b border-border bg-card shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 -ml-2 rounded-md hover:bg-muted text-foreground"
          >
            <Menu size={20} />
          </button>
          <span className="font-extrabold text-sm bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            LEADS AUTO
          </span>
          <div className="flex items-center gap-3">
            <NotificationBell notifications={[]} />
          </div>
        </header>

        {/* MOBILE DRAWER OVERLAY */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-card border-r border-border h-full p-4 animate-in slide-in-from-left duration-250">
              <div className="flex items-center justify-between mb-8">
                <span className="font-extrabold text-lg text-orange-600">
                  Leads Auto
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md hover:bg-muted text-muted-foreground"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 space-y-1">
                {navigation.map((item) => {
                  if (item.adminOnly && !isAdmin) return null;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      <item.icon size={18} />
                      <span>{item.name}</span>
                      {/* {item.badge && (
                        <span className="ml-auto bg-destructive text-destructive-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )} */}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold truncate">
                      {session?.user?.name || "System User"}
                    </p>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary uppercase">
                      {session?.user?.role || "Agent"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors border border-destructive/20"
                >
                  <LogOut size={16} />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="flex-1 overflow-y-auto bg-background p-4 md:p-6">
          {children}
        </main>
      </div>

      {/* ======================================= */}
      {/* DESKTOP BODY WRAPPER */}
      {/* ======================================= */}
      <div className="hidden md:flex flex-col flex-1 h-screen overflow-hidden">
        {/* HEADER BAR */}
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 shrink-0 z-10">
          <div>
            <h1 className="text-lg font-bold tracking-tight text-foreground capitalize">
              {pathname === "/dashboard"
                ? "Analytics Summary"
                : pathname.split("/").pop()?.replace("-", " ") || "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            {/* Real-time notifications bell */}
            <NotificationBell notifications={[]} />
          </div>
        </header>

        {/* CONTAINER CONTENT */}
        <main className="flex-1 overflow-y-auto bg-background p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
