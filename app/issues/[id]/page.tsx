import prisma from "@/prisma/client";
import React from 'react';
import {notFound} from "next/navigation";
import {Box, Flex, Grid} from "@radix-ui/themes";
import EditIssueButton from "@/app/issues/[id]/EditIssueButton";
import IssueDetails from "@/app/issues/[id]/IssueDetails";
import DeleteIssueButton from "@/app/issues/[id]/DeleteIssueButton";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";

interface Props {
  params: { id: string }
}

const IssueDetailPage = async ({params}: Props) => {
  const session = await getServerSession(authOptions);
  const issue = await prisma.issue.findUnique({
    where: {id: parseInt(params.id)}
  });
  if (!issue)
    return notFound();

  return (
      <Grid columns={{initial: "1", sm: "5"}} gap="5">
        <Box className="md:col-span-4">
          <IssueDetails issue={issue}/>
        </Box>
        {session && (<Box>
          <Flex className="w-auto" direction="column" gap="4">
            <EditIssueButton issueId={issue.id}/>
            <DeleteIssueButton issueId={issue.id}/>
          </Flex>
        </Box>
        )}
      </Grid>
  );
};

export default IssueDetailPage;
