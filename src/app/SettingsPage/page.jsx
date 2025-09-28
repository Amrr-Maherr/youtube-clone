"use client";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import {
  User,
  Lock,
  Bell,
  Monitor,
  Globe,
  Info,
  PlayCircle,
  CreditCard,
  Link as LinkIcon,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { FetchLanguages, FetchRegions } from "@/Store/i18nSlice";
import { FetchMostPopularVideos } from "@/Store/MostPopularSlice";

export default function SettingsPage() {
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");

  const dispatch = useDispatch();
  const { languages, regions, loading } = useSelector((state) => state.i18n);
    const mostPopular = useSelector((state) => state.mostPopularVideos.data);

  useEffect(() => {
    dispatch(FetchLanguages());
    dispatch(FetchRegions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(FetchMostPopularVideos(country ? country : undefined));
    localStorage.setItem("code",JSON.stringify(country))
  }, [country]);

      console.log(country);
      console.log(mostPopular, "mostPopular");
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Account */}
          <Card className="bg-[#1a1a1a] border-[#303030] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <User size={20} /> Account
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-400">
              Manage your personal information and account settings.
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card className="bg-[#1a1a1a] border-[#303030] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lock size={20} /> Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm text-gray-400">
              <span>Control your privacy preferences and data.</span>
              <Switch className="data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-[#303030]" />
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-[#1a1a1a] border-[#303030] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bell size={20} /> Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm text-gray-400">
              <span>Adjust your notification settings.</span>
              <Switch className="data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-[#303030]" />
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card className="bg-[#1a1a1a] border-[#303030] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Monitor size={20} /> Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm text-gray-400">
              <span>Dark theme</span>
              <Switch
                defaultChecked
                className="data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-[#303030]"
              />
            </CardContent>
          </Card>

          {/* Playback */}
          <Card className="bg-[#1a1a1a] border-[#303030] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <PlayCircle size={20} /> Playback
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm text-gray-400">
              <span>Play HD on Wi-Fi only</span>
              <Switch className="data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-[#303030]" />
            </CardContent>
          </Card>

          {/* Connected Apps */}
          <Card className="bg-[#1a1a1a] border-[#303030] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <LinkIcon size={20} /> Connected Apps
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-400">
              Manage apps connected to your account.
            </CardContent>
          </Card>

          {/* Billing & Payments */}
          <Card className="bg-[#1a1a1a] border-[#303030] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CreditCard size={20} /> Billing & Payments
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-400">
              View and update your payment methods and subscriptions.
            </CardContent>
          </Card>

          {/* Language & Country */}
          <Card className="bg-[#1a1a1a] border-[#303030] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Globe size={20} /> Language & Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <label className="text-sm block mb-1 text-gray-300">
                Language:
              </label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="bg-[#0f0f0f] border-[#303030] text-sm w-full mb-3 text-gray-200">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-[#303030] text-gray-200">
                  {loading ? (
                    <SelectItem disabled value="loading">
                      Loading...
                    </SelectItem>
                  ) : (
                    languages.map((lang) => (
                      <SelectItem key={lang.id} value={lang.snippet.name}>
                        {lang.snippet.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>

              {/* Country */}
              <label className="text-sm block mb-1 text-gray-300">
                Country:
              </label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger className="bg-[#0f0f0f] border-[#303030] text-sm w-full text-gray-200">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-[#303030] text-gray-200">
                  {loading ? (
                    <SelectItem disabled value="loading">
                      Loading...
                    </SelectItem>
                  ) : (
                    regions.map((region) => (
                      <SelectItem key={region.id} value={region.snippet.gl}>
                        {region.snippet.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* About */}
          <Card className="bg-[#1a1a1a] border-[#303030] text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Info size={20} /> About
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-400">
              Learn more about this app.
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
