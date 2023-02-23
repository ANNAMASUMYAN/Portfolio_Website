import styled, { css } from "styled-components";
import { HiOutlineLightBulb } from "react-icons/hi";
import { VscSettingsGear } from "react-icons/vsc";
import { TfiWallet } from "react-icons/tfi";
import { BsTable } from "react-icons/bs";

const $textColor = "#a7a9ae";
const $headerColor = "#d0dbe0";
export { $textColor, $headerColor };

export const NAVBARITEMS = [
  { label: "about", index: 0, fadeDirection: "fade-right" },
  { label: "skills", index: 1, fadeDirection: "fade-down" },
  { label: "technologies", index: 2, fadeDirection: "fade-up" },
  { label: "contact", index: 3, fadeDirection: "fade-left" },
];

export const DATA = [
  {
    id: "1.",
    category: "OS and Servers",
    items: [
      { name: "(OS)" },
      { name: "Linux" },
      { name: "(Web Servers)" },
      { name: "Nginx" },
      { name: "Apache" },
    ],
  },
  {
    id: "2.",
    category: "Clouds and languages",
    items: [
      { name: "(Clouds)" },
      { name: "AWS" },
      { name: "Digital Ocean" },
      { name: "(Language)" },
      { name: "Bash Scripting" },
    ],
  },
  {
    id: "3.",
    category: "IAC and Configuration",
    items: [
      { name: "(IAC Tools)" },
      { name: "Terraform" },
      { name: "(Automation & Configuration)" },
      { name: "Ansible" },
    ],
  },
  {
    id: "4.",
    category: "Containers, Orchestration & DB",
    items: [
      { name: "(Containerizing)" },
      { name: "Docker" },
      { name: "(Orchestration)" },
      { name: "Kubernetes (AWS EKS)" },
      { name: "(Database)" },
      { name: "AWS RDS" },
    ],
  },
  {
    id: "5.",
    category: "CI/CD and Repository",
    items: [
      { name: "(CI/CD)" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "(Repositories)" },
      { name: "Nexus" },
      { name: "DockerHub" },
    ],
  },
  {
    id: "6.",
    category: "Application and Infrastructure Monitoring",
    items: [
      { name: "(Monitoring)" },
      { name: "Prometheus" },
      { name: "Grafana" },
      { name: "AWS CloudWatch" },
    ],
  },
];
const styledIcons = css`
  height: 12.5rem;
  width: 12.5rem;
  padding: 0 1.5rem;
`;
const SHiOutlineLightBulb = styled(HiOutlineLightBulb)`
  ${styledIcons};
`;
const SVscSettingsGear = styled(VscSettingsGear)`
  ${styledIcons};
`;
const STfiWallet = styled(TfiWallet)`
  ${styledIcons};
`;
const SBsTable = styled(BsTable)`
  ${styledIcons};
`;
export const ITEMS = [
  {
    id: 1,
    icon: SHiOutlineLightBulb,
    header: "Problem Solvers",
    text: "I am especially good at problem solving and logical thinking.",
  },
  {
    id: 2,
    icon: SVscSettingsGear,
    header: "Forward Thinking",
    text: "I always thinks ahead and consider all options and consequences.",
  },
  {
    id: 3,
    icon: STfiWallet,
    header: "Fast Learner",
    text: "I am a fast learner who adapts quickly to change and eager to learn.",
  },
  {
    id: 4,
    icon: SBsTable,
    header: "Time Management",
    text: "My time management skills are excellent and well organised.",
  },
];
