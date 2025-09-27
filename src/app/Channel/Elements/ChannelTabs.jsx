import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ChannelTabs({ ChannelDescription, statistics }) {
  const formatNumber = (num) => {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(num);
  };

  return (
    <div className="my-5">
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="w-full flex gap-x-4 overflow-x-auto border-b border-gray-700 bg-transparent rounded-none scrollbar-hide">
          <TabsTrigger
            value="about"
            className="px-3 py-2 flex-shrink-0 text-sm font-medium text-gray-400 
              data-[state=active]:text-white data-[state=active]:border-b-2 
              rounded-none data-[state=active]:bg-transparent"
          >
            About
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className="px-3 py-2 flex-shrink-0 text-sm font-medium text-gray-400 
              data-[state=active]:text-white data-[state=active]:border-b-2 
              rounded-none data-[state=active]:bg-transparent"
          >
            Videos
          </TabsTrigger>
          <TabsTrigger
            value="subscribers"
            className="px-3 py-2 flex-shrink-0 text-sm font-medium text-gray-400 
              data-[state=active]:text-white data-[state=active]:border-b-2 
              rounded-none data-[state=active]:bg-transparent"
          >
            Subscribers
          </TabsTrigger>
          <TabsTrigger
            value="views"
            className="px-3 py-2 flex-shrink-0 text-sm font-medium text-gray-400 
              data-[state=active]:text-white data-[state=active]:border-b-2 
              rounded-none data-[state=active]:bg-transparent"
          >
            Views
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="about"
          className="mt-4 text-sm text-gray-300 leading-relaxed whitespace-pre-line"
        >
          {ChannelDescription}
        </TabsContent>

        <TabsContent
          value="videos"
          className="mt-4 text-sm text-gray-300 leading-relaxed"
        >
          {formatNumber(statistics?.videoCount)} Videos
        </TabsContent>

        <TabsContent
          value="subscribers"
          className="mt-4 text-sm text-gray-300 leading-relaxed"
        >
          {formatNumber(statistics?.subscriberCount)} Subscribers
        </TabsContent>

        <TabsContent
          value="views"
          className="mt-4 text-sm text-gray-300 leading-relaxed"
        >
          {formatNumber(statistics?.viewCount)} Views
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ChannelTabs;
