import { InvitationPage } from "@/components/InvitationPage";
import { getInvitationContent, resolveLocale } from "@/content/invitation";

type HomePageProps = {
  searchParams?: Promise<{
    lang?: string | string[];
  }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const currentLocale = resolveLocale(resolvedSearchParams.lang);
  const content = getInvitationContent(currentLocale);

  return <InvitationPage content={content} currentLocale={currentLocale} />;
}
